
		const tabs = document.querySelectorAll('.tab_btn');
		const all_content = document.querySelectorAll('.content_element');

		tabs.forEach((tab, index) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => { tab.classList.remove('active') });
				tab.classList.add('active');

				all_content.forEach(content => { content.classList.remove('active') });
				all_content[index].classList.add('active');
			})
		})
	  function scrollToSection(sectionId) {
            var section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
