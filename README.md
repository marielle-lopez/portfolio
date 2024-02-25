![Marielle Lopez logo](./public//favicon.ico)

# Marielle Lopez

## Resources

### Fonts

- [Inter](https://fonts.google.com/specimen/Inter)
- [Krona One](https://fonts.google.com/specimen/Krona+One)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

### Guides

- [How to add a gradient overlay to text with CSS](https://fossheim.io/writing/posts/css-text-gradient/)
- [Blinking cursor](https://phuoc.ng/collection/css-animation/blinking-cursor/)

### Icons and Logos

- [University of Melbourne logo](https://i0.wp.com/afribary.com/opportunities/wp-content/uploads/2021/07/CS-UOM-logo.png?fit=600%2C400&ssl=1)
- [RMIT logo](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RMIT_University_Logo.svg/1280px-RMIT_University_Logo.svg.png)
- [ACU logo](https://dassh.edu.au/wp-content/uploads/Australian-Catholic-University-logo.png)

## To-Do

- Media queries
- Add 'Download CV' button
- Make email icon clickable; copies email to clipboard

### Low Priority

- Replace image with CapsuleImg component on landing page
- Make 'Download CV' button functional
- Create a gradient top-border to active NavLink
- Make content scrollable without making browser adding a scroll bar
- Add music via Spotify
- Ensure GitHub links are to repositories of the main branch
- Display extra details in an overlay of a project on hover

## Task Completion History

### February 25, 2024

- Fixed wrapping text bug for heading on the landing page

### February 10, 2024

- Re-worked my design mockup for my 'Projects' page
- Created components related to the 'Projects' page and applied styling

Today was all about the 'Projects' page. I didn't like my original design for the cards representing each project, so I ended up redoing it and came up with a mockup I was happy with. I then created a ProjectCard component and its associated container, implementing these on the 'Projects' page. I originally planned the ProjectCard component to have a layer that would appear on hover with extra details (detailed description and links to its GitHub repository and deployed version) on its related project, but I'll need to research a bit on this. For now, I'll place the repository and deployed links opposite the project title.

### February 9, 2024

- Researched [React Spring](https://www.react-spring.dev/docs) library to bring in animation to the project

Used React Spring's high-order components (HOCs) to add animation to my portfolio, specifically for the Header and PageHeading components, as well as the main content of the website.

### February 8, 2024

- Completing design mockups for 'Skills' and 'Projects' pages on Figma
- Created SkillCard component and corresponding container component for Skills page, applied styling according to design mockups
- Added skill information to a JSON file and used such file for the Skills page

Majority of the work today was associated with the Skills page. For my design of this page, I represented each skill in a small card, which I developed in this project (i.e., SkillCard component).

### February 1, 2024

- Completed About page using newly created components (i.e., CapsuleImg, EducationCard, PageLine) and relevant containers

Today, I worked on the About page of my portfolio application. My design for this page involved sections of similar design and layout, so I made components for these; EducationCard, CapsuleImg, and PageLine. I also developed a JSON file for my education information. Using these components and data, I constructed my About page as close as I could to my planned design!

### January 31, 2024

- Created Header component and added relevant content (i.e., NavBar component, external links, 'Download CV' button)

With new knowledge on React development, it was time to revamp my portfolio website.

As usual, I went to [Dribbble](https://www.dribble.com/) and searched for some inspiration for the design of my portfolio. I got to work on Figma and came up with a mockup for my landing page.

I then set up a Vite React application and created the planned pages in order to construct the Header component. I added the relevant content to such component, and applied styling according to my design mockup. I managed to add all the content to my planned landing page as well.

## Issues

- `favicon.ico` does not appear in browser tab with path as `/favicon.ico`, only with `/public/favicon.ico`
- Active link still adopts hover effects
- 'Download CV' button does not utilise Button component
- Fix en dash symbol in EducationCard component
