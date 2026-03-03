const sidebar = document.getElementById('sidebar');
        const toggleBtn = document.querySelector('.toggle-btn');
        const homeTxts = document.querySelectorAll('.txt');


        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
            const expanded = sidebar.classList.contains('expanded');
            toggleBtn.innerHTML = expanded
                ? '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
            homeTxts.forEach(txt => {
                if (expanded) {
                    txt.style.opacity = '1';
                    txt.style.visibility = 'visible';
                } else {
                    txt.style.opacity = '0';
                    txt.style.visibility = 'hidden';
                }
            });
        });