  const toggleBtn = document.getElementById("theme-toggle");

        // load saved theme
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.classList.add("light");
        }

        toggleBtn.addEventListener("click", () => {
            document.documentElement.classList.toggle("light");

            // save theme
            if (document.documentElement.classList.contains("light")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });

        const navLinks = document.querySelectorAll(".nav-btn a.tab");
        const sections = document.querySelectorAll(".section");

        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = link.dataset.section;

                // Hide all sections
                sections.forEach(sec => sec.classList.remove("active"));

                // Show selected section
                document.getElementById(target).classList.add("active");

                // Remove active class from all tabs
                navLinks.forEach(tab => tab.classList.remove("active"));

                // Add active class to clicked tab
                link.classList.add("active");
            });
        });

