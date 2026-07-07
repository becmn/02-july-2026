 function initPuzzle(index) {
            currentPuzzleIndex = index;
            hintCount = 0;
            document.getElementById('hintBtn').textContent = 'HINT 0/3';
            document.getElementById('hintBtn2').textContent = 'HINT 0/3';
            document.getElementById('messageBox').className = 'message';
            document.getElementById('messageBox').textContent = '';
            document.getElementById('solutionArea').innerHTML = '';
            
            const puzzle = puzzles[index];
            gridState = {};

            puzzle.people.forEach(person => {
                gridState[person] = {};
                Object.keys(puzzle.categories).forEach(category => {
                    gridState[person][category] = {};
                    puzzle.categories[category].forEach(attr => {
                        gridState[person][category][attr] = null;
                    });
                });
            });

            renderClues(puzzle);
            renderGrid(puzzle);
            updatePuzzleButtons();
        }

        function renderClues(puzzle) {
            const cluesList = document.getElementById('cluesList');
            cluesList.innerHTML = puzzle.clues.map((clue, i) => 
                `<div class="clue-item">${clue}</div>`
            ).join('');
        }

        function renderGrid(puzzle) {
            const container = document.getElementById('gridContainer');
            container.innerHTML = '';

            const categories = Object.keys(puzzle.categories);
            const people = puzzle.people;
            const numColumns = categories.length + 1; // +1 for the name column

            // Set the grid template columns
            container.style.gridTemplateColumns = `120px repeat(${categories.length}, 150px)`;

            // Top-left blank cell
            let corner = document.createElement('div');
            corner.className = 'grid-cell corner';
            container.appendChild(corner);

            // Header - category titles
            categories.forEach(cat => {
                let cell = document.createElement('div');
                cell.className = 'grid-cell header-row';
                cell.textContent = cat.toUpperCase();
                container.appendChild(cell);
            });

            // Data rows
            people.forEach(person => {
                // Person name cell
                let nameCell = document.createElement('div');
                nameCell.className = 'grid-cell header-col';
                nameCell.textContent = person;
                container.appendChild(nameCell);

                // Category cells for this person
                categories.forEach(category => {
                    let cell = document.createElement('div');
                    cell.className = 'grid-cell data empty';
                    cell.dataset.person = person;
                    cell.dataset.category = category;
                    cell.textContent = '[ Click ]';

                    cell.addEventListener('click', () => openSelector(person, category, puzzle.categories[category]));
                    container.appendChild(cell);
                });
            });

            updateGridDisplay();
        }

        function updateGridDisplay() {
            const puzzle = puzzles[currentPuzzleIndex];
            const categories = Object.keys(puzzle.categories);

            categories.forEach(category => {
                puzzle.people.forEach(person => {
                    const cell = document.querySelector(`[data-person="${person}"][data-category="${category}"]`);
                    if (cell) {
                        // Find if any attribute is marked as YES
                        let assigned = null;
                        puzzle.categories[category].forEach(attr => {
                            if (gridState[person][category][attr] === true) {
                                assigned = attr;
                            }
                        });

                        if (assigned) {
                            cell.textContent = assigned;
                            cell.classList.remove('empty');
                            cell.classList.add('assigned');
                        } else {
                            cell.textContent = '[ Click ]';
                            cell.classList.add('empty');
                            cell.classList.remove('assigned');
                        }
                    }
                });
            });
        }

        function enforceLogi([person, category, attribute]) {
            const puzzle = puzzles[currentPuzzleIndex];
            const categories = Object.keys(puzzle.categories);

            // If this person+category+attribute is marked YES, mark all others in that cell NO
            puzzle.people.forEach(p => {
                if (p !== person) {
                    gridState[p][category][attribute] = false;
                }
            });

            // If this person+category+attribute is marked YES, mark all other attributes for this person in this category NO
            puzzle.categories[category].forEach(attr => {
                if (attr !== attribute) {
                    gridState[person][category][attr] = false;
                }
            });
        }

function openSelector(person, category, options) {
    const puzzle = puzzles[currentPuzzleIndex];
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalOptions = document.getElementById('modalOptions');

    modalTitle.textContent = `${person} - ${category}`;
    modalOptions.innerHTML = '';

    options.forEach(option => {
        const currentValue = gridState[person][category][option];
        const isSelected = currentValue === true;
        const isMarkedWrong = currentValue === false;

        let assignedToOther = false;
        puzzle.people.forEach(p => {
            if (p !== person && gridState[p][category][option] === true) {
                assignedToOther = true;
            }
        });

        const optionBtn = document.createElement('button');
        optionBtn.type = 'button';
        optionBtn.className = 'option-btn';
        if (isSelected) {
            optionBtn.classList.add('selected');
        }
        if (assignedToOther) {
            optionBtn.disabled = true;
        }

        const label = document.createElement('span');
        label.className = 'option-label';
        label.textContent = option;

        const xMark = document.createElement('span');
        xMark.className = 'option-x';
        xMark.textContent = 'X';
        xMark.title = 'Mark incorrect';

        if (isMarkedWrong) {
            xMark.classList.add('marked');
        }

        if (isSelected || assignedToOther) {
            xMark.classList.add('disabled');
        }

    xMark.addEventListener('click', (e) => {
    e.stopPropagation();
    if (optionBtn.disabled || isSelected) return;

    gridState[person][category][option] =
        gridState[person][category][option] === false ? null : false;

    updateGridDisplay();
    openSelector(person, category, options);
    });

optionBtn.addEventListener('click', () => {
    if (optionBtn.disabled) return;

    if (gridState[person][category][option] === true) {
        gridState[person][category][option] = null;
    } else {
        options.forEach(opt => {
            if (opt !== option && gridState[person][category][opt] === true) {
                gridState[person][category][opt] = null;
            }
        });

        gridState[person][category][option] = true;
        enforceLogi([person, category, option]);
    }

    updateGridDisplay();
    openSelector(person, category, options);
});

        optionBtn.appendChild(label);
        optionBtn.appendChild(xMark);
        modalOptions.appendChild(optionBtn);
    });

    modal.classList.add('active');
}

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        function checkAnswer() {
            const puzzle = puzzles[currentPuzzleIndex];
            const messageBox = document.getElementById('messageBox');

            let isCorrect = true;
            for (const person in puzzle.solution) {
                for (const category in puzzle.solution[person]) {
                    const expectedAttr = puzzle.solution[person][category];
                    const marked = gridState[person][category][expectedAttr];
                    if (marked !== true) {
                        isCorrect = false;
                        break;
                    }
                }
                if (!isCorrect) break;
            }

            if (isCorrect) {
                messageBox.className = 'message success';
                messageBox.textContent = 'CORRECT! You solved the puzzle!';
                showSolution();
            } else {
                messageBox.className = 'message error';
                messageBox.textContent = 'Not quite right. Keep trying!';
            }
        }

        function showSolution() {
            const puzzle = puzzles[currentPuzzleIndex];
            const solutionArea = document.getElementById('solutionArea');
            
            let solutionHTML = '<div class="solution"><h4>SOLUTION:</h4>';
            puzzle.people.forEach(person => {
                solutionHTML += `<div class="solution-item"><strong>${person}:</strong> `;
                Object.keys(puzzle.solution[person]).forEach((cat, i) => {
                    if (i > 0) solutionHTML += ' • ';
                    solutionHTML += `${puzzle.solution[person][cat]}`;
                });
                solutionHTML += '</div>';
            });
            solutionHTML += '</div>';
            
            solutionArea.innerHTML = solutionHTML;
        }

function showHint() {
    const puzzle = puzzles[currentPuzzleIndex];
    const messageBox = document.getElementById('messageBox');

    if (hintCount >= MAX_HINTS) {
        messageBox.className = 'message error';
        messageBox.textContent = 'You already used all 3 hints!';
        return;
    }

    for (const person in puzzle.solution) {
        for (const category in puzzle.solution[person]) {
            const attr = puzzle.solution[person][category];
            if (gridState[person][category][attr] !== true) {
                gridState[person][category][attr] = true;
                enforceLogi([person, category, attr]);
                hintCount++;

                messageBox.className = 'message success';
                messageBox.textContent = `HINT: One piece added! (${hintCount}/${MAX_HINTS})`;
                document.getElementById('hintBtn').textContent = `HINT ${hintCount}/${MAX_HINTS}`;
                document.getElementById('hintBtn2').textContent = `HINT ${hintCount}/${MAX_HINTS}`;
                updateGridDisplay();
                return;
            }
        }
    }
}

        function resetPuzzle() {
            initPuzzle(currentPuzzleIndex);
        }

        function updatePuzzleButtons() {
            document.querySelectorAll('.puzzle-btn').forEach((btn, i) => {
                btn.classList.toggle('active', i === currentPuzzleIndex);
            });
        }

        // Event listeners
        document.querySelectorAll('.puzzle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.puzzle);
                initPuzzle(index);
                // Hide selector after puzzle selection
                document.querySelector('.puzzle-selector').classList.add('hidden');
            });
        });

        document.getElementById('hintBtn').addEventListener('click', showHint);
        document.getElementById('resetBtn').addEventListener('click', resetPuzzle);
        document.getElementById('checkBtn').addEventListener('click', checkAnswer);

        // Bottom controls button listeners
        document.getElementById('hintBtn2').addEventListener('click', showHint);
        document.getElementById('resetBtn2').addEventListener('click', resetPuzzle);
        document.getElementById('checkBtn2').addEventListener('click', checkAnswer);

        document.getElementById('puzzleSelectBtn').addEventListener('click', () => {
            document.querySelector('.puzzle-selector').classList.toggle('hidden');
        });

        // Initialize first puzzle
        initPuzzle(0);
  