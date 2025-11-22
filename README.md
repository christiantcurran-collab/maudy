# Maudy - Supporting Twice Exceptional Families

A comprehensive website providing free resources, tools, and support for parents of twice exceptional (2e) children.

## About

Maudy is designed to help parents support their twice exceptional children - those who are gifted and have learning differences, ADHD, autism, or other challenges. The site provides practical tools and evidence-based resources in an accessible, mobile-optimized format.

## Features

### 🧩 Free Resources
- **Social Stories** - 12+ downloadable social stories covering common situations
- **Visual Supports** - Now/Next boards, visual schedules, emotion charts, and more
- **Blog** - Expert articles on supporting 2e children
- **Recommended Products** - Curated list of helpful tools and products

### 🧠 Interactive Tools
- **Sensory Profile Builder** - 25-question assessment to understand your child's sensory needs
- Personalized recommendations based on profile results
- Printable results for sharing with teachers and therapists

### 📱 Mobile Optimized
- Fully responsive design
- Mobile-first navigation
- Touch-friendly interfaces
- Fast loading times

### 💌 Community
- Weekly newsletter signup
- Email integration ready (Mailchimp placeholder)

## Design

The website uses a calming purple and pink color scheme inspired by the Maudy logo:
- Primary Purple: `#6B4D8A`
- Light Purple: `#8F6FB8`
- Accent Pink: `#FFB6C1`

The design prioritizes:
- Clean, uncluttered layouts
- Easy navigation
- High readability
- Accessibility

## File Structure

```
maudy/
├── index.html                  # Homepage
├── blogs.html                  # Blog listing page
├── social-stories.html         # Downloadable social stories
├── visual-supports.html        # Downloadable visual supports
├── sensory-profile.html        # Sensory profile assessment
├── recommended-products.html   # Product recommendations
├── styles.css                  # Main stylesheet
├── navigation.js              # Navigation and modal functionality
├── sensory-profile.js         # Sensory assessment logic
├── sitemap.xml                # SEO sitemap
├── robots.txt                 # Search engine instructions
└── maudy logo.PNG             # Logo file
```

## Getting Started

1. Open `index.html` in a web browser
2. Navigate through the different sections
3. Try the Sensory Profile Builder
4. Download free resources

## Customization

### Email Integration
To connect the email signup modal to Mailchimp:
1. Open `navigation.js`
2. Find the `mailchimpUrl` variable (line ~155)
3. Replace placeholder with your Mailchimp JSONP endpoint

### Adding Blog Posts
Blog posts are currently placeholder links. To add real blog content:
1. Create new HTML files (e.g., `blog-your-topic.html`)
2. Use the same structure as other pages
3. Update links in `blogs.html`

### Download Links
Currently download buttons show alerts. To add real PDFs:
1. Create PDF resources
2. Place them in a `/downloads/` folder
3. Update href attributes in HTML files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS (no frameworks required)
- Minimal JavaScript
- Fast page loads
- Mobile-optimized images (using external CDN placeholders)

## SEO

- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Sitemap.xml included
- Mobile-friendly design

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios
- Readable font sizes

## Future Enhancements

Potential additions:
- Actual PDF downloads for social stories and visual supports
- Blog article pages with full content
- User accounts for saving sensory profiles
- Community forum integration
- Video tutorials
- Printable planners and worksheets

## Credits

Design inspired by professional occupational therapy and special education resources. Content informed by research on twice exceptional children and evidence-based strategies.

## License

Resources provided for educational purposes. Please adapt and customize for your specific needs.

## Support

For questions or suggestions, use the newsletter signup to join our community.

---

Built with ❤️ for 2e families

