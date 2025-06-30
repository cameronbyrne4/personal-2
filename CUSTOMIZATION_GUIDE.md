# Personal Website Customization Guide

This guide will help you replace Martin Sit's information with your own personal details.

## 🚀 Quick Start

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Follow the steps below to customize**

## 📝 Files to Update

### 1. Basic Configuration

#### `package.json`
```json
{
  "name": "your-name-website",  // Change from "v2"
  "version": "0.1.0",
  "private": true
}
```

#### `src/app/layout.js`
- **Line 12**: Change `title: "Martin Sit"` to your name
- **Line 13**: Change `metadataBase: new URL("https://martinsit.ca")` to your domain
- **Line 37**: Replace `gaId="G-ZVLSZR04HM"` with your Google Analytics ID

#### `README.md`
- Update the title, description, and links to reflect your information

### 2. Main Content

#### `src/app/page.js` (Homepage)
Replace the entire content with your information:
- **Personal details**: Name, current role, education
- **Recent achievements**: Your projects, work experience
- **Background**: Your education, research, activities
- **Links**: Update to your projects, resume, etc.

#### `src/app/components/Header.js`
- **Line 58**: Change `martin sit` to your name

#### `src/app/projects/page.js`
Replace all projects with your own:
- Update project titles, descriptions, technologies
- Replace GitHub links, demo links
- Update project images

#### `src/app/writing/` directory
- Replace existing blog posts with your own content
- Update the writing page to reflect your articles

### 3. Assets

#### Replace Images
- **`src/app/assets/headshot.png`**: Your professional photo
- **`src/app/assets/projects/`**: Your project screenshots/images
- **`src/app/components/icon/`**: Company/school logos you want to display
- **`public/resume.pdf`**: Your resume

#### Update Logo
- **`docs/logo.png`**: Your personal logo or avatar

### 4. Styling (Optional)

#### `src/app/globals.css`
- Customize colors, fonts, or other styling
- Update the signature component if needed

#### `tailwind.config.js`
- Modify theme colors, fonts, or other design tokens

## 🎯 Step-by-Step Process

### Step 1: Update Basic Info
1. Change your name in `layout.js` and `Header.js`
2. Update the domain in `layout.js`
3. Replace Google Analytics ID
4. Update `package.json` name

### Step 2: Replace Content
1. **Homepage**: Edit `src/app/page.js` with your personal information
2. **Projects**: Replace all projects in `src/app/projects/page.js`
3. **Writing**: Add your blog posts to `src/app/writing/`

### Step 3: Update Assets
1. Replace `headshot.png` with your photo
2. Add your project images to `src/app/assets/projects/`
3. Update company/school logos in `src/app/components/icon/`
4. Replace `resume.pdf` with your resume

### Step 4: Test & Deploy
1. Run `npm run dev` to test locally
2. Check all links work correctly
3. Deploy to your preferred platform (Vercel, Netlify, etc.)

## 🔧 Customization Examples

### Example Homepage Content Structure
```javascript
// In src/app/page.js
const personalInfo = [
  {
    type: "role",
    text: "Software Engineer @ Company Name",
    link: "https://company.com"
  },
  {
    type: "education", 
    text: "Computer Science @ University Name",
    link: "https://university.edu"
  },
  {
    type: "recent",
    items: [
      "Built [Project Name] - description",
      "Led [Team/Project] - description",
      "Published [Article/Research] - description"
    ]
  }
];
```

### Example Project Structure
```javascript
// In src/app/projects/page.js
const projects = [
  {
    title: "Your Project Name",
    href: "https://your-project.com",
    description: "Description of what you built and its impact",
    image: YourProjectImage,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo-link.com"
  }
];
```

## 🚨 Important Notes

1. **Keep the same file structure** - Don't rename or move files unless necessary
2. **Test thoroughly** - Make sure all links and images work
3. **Update all references** - Search for "Martin" or "martinsit" to find all instances
4. **Maintain responsive design** - Test on mobile and desktop
5. **Check accessibility** - Ensure proper alt text and keyboard navigation

## 🎨 Optional Enhancements

- Add your social media links
- Customize the color scheme
- Add animations or interactions
- Include a contact form
- Add a blog section
- Integrate with a CMS for easier content updates

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/) (for blog posts)

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all import paths are correct
3. Ensure all required dependencies are installed
4. Test with a fresh `npm install` if needed

Good luck customizing your personal website! 🎉 