// Sensory Profile Builder JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sensoryProfileForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateSensoryProfile();
    });
});

function calculateSensoryProfile() {
    // Get child information
    const childName = document.getElementById('childName').value || 'Your child';
    const childAge = document.getElementById('childAge').value;
    
    // Calculate scores for each sensory category
    const auditory = calculateCategoryScore(['q1', 'q2', 'q3', 'q4', 'q5']);
    const visual = calculateCategoryScore(['q6', 'q7', 'q8', 'q9', 'q10']);
    const tactile = calculateCategoryScore(['q11', 'q12', 'q13', 'q14', 'q15']);
    const movement = calculateCategoryScore(['q16', 'q17', 'q18', 'q19', 'q20']);
    const oral = calculateCategoryScore(['q21', 'q22', 'q23', 'q24', 'q25']);
    
    // Calculate total score
    const totalScore = auditory.score + visual.score + tactile.score + movement.score + oral.score;
    const maxScore = 125; // 25 questions * 5 points max
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Determine overall profile
    let overallProfile = '';
    let profileDescription = '';
    
    if (percentage < 40) {
        overallProfile = 'Low Sensory Sensitivity';
        profileDescription = `${childName} appears to have low sensory sensitivity overall. They may seek out sensory input and may not always notice sensory information in their environment.`;
    } else if (percentage < 60) {
        overallProfile = 'Typical Sensory Processing';
        profileDescription = `${childName} demonstrates typical sensory processing patterns. They generally handle sensory input well with some areas of sensitivity.`;
    } else if (percentage < 75) {
        overallProfile = 'Moderate Sensory Sensitivity';
        profileDescription = `${childName} shows moderate sensory sensitivity. They may be easily overwhelmed by certain sensory experiences and benefit from accommodations in some settings.`;
    } else {
        overallProfile = 'High Sensory Sensitivity';
        profileDescription = `${childName} demonstrates high sensory sensitivity. They are likely easily overwhelmed by sensory input and would benefit from significant environmental modifications and support strategies.`;
    }
    
    // Display results
    displayResults(childName, overallProfile, profileDescription, {
        auditory,
        visual,
        tactile,
        movement,
        oral
    });
}

function calculateCategoryScore(questionIds) {
    let score = 0;
    let maxScore = questionIds.length * 4; // 4 is the max value per question
    
    questionIds.forEach(id => {
        const selectedOption = document.querySelector(`input[name="${id}"]:checked`);
        if (selectedOption) {
            score += parseInt(selectedOption.value);
        }
    });
    
    const percentage = Math.round((score / maxScore) * 100);
    
    let level = '';
    if (percentage < 40) {
        level = 'Low Sensitivity / Seeking';
    } else if (percentage < 60) {
        level = 'Typical';
    } else if (percentage < 75) {
        level = 'Moderate Sensitivity';
    } else {
        level = 'High Sensitivity';
    }
    
    return { score, maxScore, percentage, level };
}

function displayResults(childName, overallProfile, profileDescription, categories) {
    // Show results section
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    
    // Display summary
    const summaryDiv = document.getElementById('profileSummary');
    summaryDiv.style.background = '#6B4D8A';
    summaryDiv.style.color = 'white';
    summaryDiv.innerHTML = `
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">Overall Profile: ${overallProfile}</h3>
        <p style="font-size: 1rem; line-height: 1.6; margin: 0;">${profileDescription}</p>
    `;
    
    // Display category breakdown
    const breakdownDiv = document.getElementById('categoryBreakdown');
    breakdownDiv.innerHTML = `
        <h3><i class="fas fa-chart-bar"></i> Sensory Category Breakdown</h3>
        ${createCategoryBar('Auditory Processing', categories.auditory)}
        ${createCategoryBar('Visual Processing', categories.visual)}
        ${createCategoryBar('Tactile Processing', categories.tactile)}
        ${createCategoryBar('Movement & Body Awareness', categories.movement)}
        ${createCategoryBar('Oral & Smell Sensitivity', categories.oral)}
    `;
    
    // Generate recommendations
    const recommendationsDiv = document.getElementById('recommendationsContent');
    recommendationsDiv.innerHTML = generateRecommendations(childName, categories);
    
    // Scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function createCategoryBar(categoryName, categoryData) {
    const barColor = getBarColor(categoryData.percentage);
    
    return `
        <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong>${categoryName}</strong>
                <span style="color: #6B4D8A; font-weight: bold;">${categoryData.level}</span>
            </div>
            <div style="background: #e9ecef; height: 30px; border-radius: 4px; overflow: hidden; position: relative;">
                <div style="background: ${barColor}; height: 100%; width: ${categoryData.percentage}%; transition: width 0.5s ease;"></div>
                <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: ${categoryData.percentage > 50 ? 'white' : '#333'}; font-weight: 600; font-size: 0.85rem;">
                    ${categoryData.percentage}%
                </span>
            </div>
        </div>
    `;
}

function getBarColor(percentage) {
    if (percentage < 40) return '#8F6FB8'; // Purple for low sensitivity
    if (percentage < 60) return '#6B4D8A'; // Dark purple for typical
    if (percentage < 75) return '#FFB6C1'; // Pink for moderate
    return '#FFA0AD'; // Dark pink for high
}

function generateRecommendations(childName, categories) {
    let recommendations = '';
    
    // Auditory recommendations
    if (categories.auditory.percentage >= 60) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-ear"></i> Auditory Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Consider noise-cancelling headphones for busy environments</li>
                    <li>Provide a quiet workspace for homework and activities</li>
                    <li>Use visual cues alongside verbal instructions</li>
                    <li>Allow breaks from noisy environments</li>
                </ul>
            </div>
        `;
    } else if (categories.auditory.percentage < 40) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-ear"></i> Auditory Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Provide background music during activities if it helps focus</li>
                    <li>Consider fidgets with auditory feedback</li>
                    <li>Ensure important information is repeated or written down</li>
                </ul>
            </div>
        `;
    }
    
    // Visual recommendations
    if (categories.visual.percentage >= 60) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-eye"></i> Visual Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Use natural lighting or reduce harsh fluorescent lights</li>
                    <li>Minimize visual clutter in learning spaces</li>
                    <li>Consider sunglasses for bright outdoor environments</li>
                    <li>Use muted colors and simple patterns in the environment</li>
                </ul>
            </div>
        `;
    }
    
    // Tactile recommendations
    if (categories.tactile.percentage >= 60) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-hand-paper"></i> Tactile Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Choose soft, tagless clothing in preferred fabrics</li>
                    <li>Warn before unexpected touch</li>
                    <li>Provide alternatives to messy activities when needed</li>
                    <li>Consider seamless socks and inside-out clothing</li>
                </ul>
            </div>
        `;
    } else if (categories.tactile.percentage < 40) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-hand-paper"></i> Tactile Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Provide textured fidgets and tactile materials</li>
                    <li>Consider a weighted blanket or lap pad</li>
                    <li>Offer opportunities for messy play (play-doh, finger painting)</li>
                </ul>
            </div>
        `;
    }
    
    // Movement recommendations
    if (categories.movement.percentage >= 60) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-running"></i> Movement Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Provide movement breaks during activities</li>
                    <li>Consider a wobble cushion or standing desk option</li>
                    <li>Allow fidgeting during focused tasks</li>
                    <li>Break tasks into smaller segments with movement between</li>
                </ul>
            </div>
        `;
    } else if (categories.movement.percentage < 40) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-running"></i> Movement Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Build in regular physical activities throughout the day</li>
                    <li>Consider a trampoline or swing for sensory input</li>
                    <li>Use movement-based learning activities</li>
                    <li>Provide heavy work activities (carrying books, pushing/pulling)</li>
                </ul>
            </div>
        `;
    }
    
    // Oral recommendations
    if (categories.oral.percentage >= 60) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-utensils"></i> Oral & Sensory Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Respect food preferences and introduce new foods gradually</li>
                    <li>Use unscented or low-scent personal care products</li>
                    <li>Make tooth brushing/hair washing routines predictable and controlled</li>
                    <li>Consider different toothbrush types (soft, electric, etc.)</li>
                </ul>
            </div>
        `;
    } else if (categories.oral.percentage < 40) {
        recommendations += `
            <div class="example-box" style="margin-bottom: 1rem;">
                <h4><i class="fas fa-utensils"></i> Oral & Sensory Support</h4>
                <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                    <li>Provide safe chewing options (chewable jewelry, gum)</li>
                    <li>Offer crunchy or chewy snacks throughout the day</li>
                    <li>Consider oral motor exercises with guidance from OT</li>
                </ul>
            </div>
        `;
    }
    
    // General recommendations
    recommendations += `
        <div class="example-box" style="margin-bottom: 1rem; background: #f0e6f6;">
            <h4><i class="fas fa-info-circle"></i> Next Steps</h4>
            <p style="margin: 0.5rem 0;">Based on this profile, consider:</p>
            <ul style="margin: 0.5rem 0 0 1.5rem; line-height: 1.8;">
                <li>Sharing these results with your child's teachers and support team</li>
                <li>Consulting with an occupational therapist for professional assessment</li>
                <li>Exploring our <a href="recommended-products.html" style="color: #6B4D8A; font-weight: 600;">recommended products</a> for sensory support</li>
                <li>Downloading our <a href="visual-supports.html" style="color: #6B4D8A; font-weight: 600;">visual schedules</a> to support daily routines</li>
            </ul>
        </div>
    `;
    
    return recommendations;
}

