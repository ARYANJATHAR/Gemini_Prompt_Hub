/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// Enhanced Prompt Data with categories and tags
const promptData = [
    {
        id: 1,
        prompt: "Take a picture with a Polaroid camera. The photo should look like a normal photo, without any clear subjects or props. The photo should have a slight blur effect and a consistent light source, such as a flash from a dark room, spread throughout the photo. Do not change the faces. Replace the background behind the two people with a white curtain. With the guy being close to me like a couple",
        category: "Photography",
        tags: ["polaroid", "couple", "vintage", "flash"]
    },
    {
        id: 2,
        prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect brown color Pinteresty aesthetic retro saree. It must feel like a 90s movie black and brown mixed hair baddie with a small flower tucked visibly into her hairs and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
        category: "Fashion",
        tags: ["retro", "saree", "90s", "vintage", "golden hour"]
    },
    {
        id: 3,
        prompt: "Use the model to create a black-and-white studio photo, featuring a young man sitting casually on a metal folding chair with his legs crossed. He is wearing a denim jacket, a dark t-shirt, straight jeans, and black boots. The lighting is soft and minimal, producing sharp shadows and a moody atmosphere. His body pose is relaxed, slightly leaning back with one hand on the chair's armrest, his face turned to the side. The background is plain, with a simple and modern aesthetic.",
        category: "Portrait",
        tags: ["black-white", "studio", "male", "casual", "moody"]
    },
    {
        id: 4,
        prompt: "Create a retro, vintage, grainy yet bright image based on the reference picture. The subject should be draped in a perfect plain yellow chiffon saree with a Pinterest-worthy aesthetic. It should evoke the feel of a 90s movie, with the subject having dark brown wavy curly hair and a small flower tucked visibly into her curls. Capture a romanticized windy environment. The girl stands against a solid wall with deep shadows and dramatic contrast, creating a mysterious and artistic atmosphere. The lighting should be warm with golden tones that suggest sunset or golden hour. Keep the background minimalist and slightly textured. The expression on her face should be moody and introspective, yet calm and subtly happy.",
        category: "Fashion",
        tags: ["retro", "saree", "yellow", "90s", "golden hour"]
    },
    {
        id: 5,
        prompt: "Create a retro, vintage-inspired image - grainy yet bright based on the reference picture. The girl should be draped in a perfect blue cotton saree with small white flower prints, paired with a white blouse with sleeves above the elbow, styled in a Pinterest-inspired aesthetic. The vibe should capture the essence of a 90s movie with a dark-brown-haired beauty, with silky hair and a small flower tucked visibly into her hair, enhanced by a windy, romantic atmosphere. She is sitting on a wooden bench as a few leaves blow in the air, while dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Her pose should suggest that she is reading a book.",
        category: "Fashion",
        tags: ["retro", "saree", "blue", "reading", "vintage"]
    },
    {
        id: 6,
        prompt: "Create a vintage 1970s Bollywood-inspired photograph of a stylish man sitting casually on the hood of a classic car. He is dressed in a cream pinstriped blazer, cream bell-bottom trousers, and a dark brown shirt with the top buttons open, paired with brown formal shoes, giving a confident mafia-style look. The car has wide whitewall tires, chrome details, and a polished metallic body, reflecting sunlight. In the background, tall green trees and hedges frame the scene. The photograph has the warm, grainy tones of a 1970s film camera, giving it a retro cinematic vibe.",
        category: "Lifestyle",
        tags: ["1970s", "bollywood", "car", "vintage", "mafia"]
    },
    {
        id: 7,
        prompt: "Create a retro, vintage, grainy yet bright image of the reference picture. The subject should be draped in an elegant royal blue silk saree with golden motifs and a golden border, creating a Pinterest-worthy aesthetic. The image should evoke a 90s movie feel, featuring a brown-haired beauty with a small flower tucked visibly into her curls in a romantic, windy environment. The girl stands against a solid wall with deep shadows and dramatic contrast, creating a mysterious and artistic atmosphere. The lighting should be warm with golden tones suggesting sunset or golden hour. Keep the background minimalist and slightly textured. Her facial expression should be moody and introspective, yet calm and subtly happy.",
        category: "Fashion",
        tags: ["retro", "saree", "royal", "90s", "golden"]
    },
    {
        id: 8,
        prompt: "Create a retro, vintage-inspired image that is grainy yet bright, based on the reference picture. The girl should be draped in a perfect plain purple saree paired with a black sleeveless blouse, creating a Pinterest-style aesthetic. The vibe should capture the essence of a 90s movie featuring a dark brown-haired beauty with silky hair and a small flower tucked visibly into her tresses, enhanced by a windy, romantic atmosphere. She stands against an old wooden door, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Her pose should show her adjusting her saree.",
        category: "Fashion",
        tags: ["retro", "saree", "purple", "90s", "vintage"]
    },
    {
        id: 9,
        prompt: "Create a retro, vintage image that is grainy yet bright based on the reference picture. The subject should be draped in a perfect black saree with a Pinterest-aesthetic. The image should evoke a 90s movie feel, featuring a woman with brown hair and a small flower tucked visibly into her curls, set in a romantic, windy environment. She stands against a solid wall with deep shadows and dramatic contrast, creating a mysterious and artistic atmosphere. The lighting should be warm with golden tones suggesting sunset or golden hour. The background should be minimalist and slightly textured. Her expression should be moody yet calm, happy and introspective.",
        category: "Fashion",
        tags: ["retro", "saree", "black", "90s", "mysterious"]
    },
    {
        id: 10,
        prompt: "Create a 1/7 scale commercialized figurine of the characters in the picture using realistic styling and placed in a real environment. Position the figurine on a computer desk with a round transparent acrylic base (no text on the base). On the computer screen, display the 3D modeling process of this figurine. Next to the computer screen, place a BANDAI-style toy packaging box featuring the original artwork with two-dimensional flat illustrations. Transform this photo into a figurine display. Place the figure version (with clearly visible PVC material) on a round plastic base in front of a model packaging box that has the character from the photo printed on it. Set the entire scene indoors.",
        category: "Creative",
        tags: ["figurine", "3d", "bandai", "collectible", "scale"]
    },
    {
        id: 11,
        prompt: "DSLR style 4K ultra-realistic photo of a stylish man (face and hairstyle must match the uploaded image exactly) sitting casually on a sleek black leather lounge chair. He's wearing a crisp white polo shirt, slim-fit navy chinos, and white sneakers. His look is completed with a silver wristwatch and aviator sunglasses. His posture is relaxed, with a confident smile. The background features a luxury penthouse living room with floor-to-ceiling windows, modern grey sofas, indoor plants, and warm natural daylight streaming in.",
        category: "Lifestyle",
        tags: ["luxury", "penthouse", "fashion", "modern", "4k"]
    },
    {
        id: 12,
        prompt: "A highly realistic photo of a young man sitting stylishly on an old iron staircase outside a building. He wears a loose beige T-shirt, faded blue jeans, white sneakers, a gold wristwatch, and round sunglasses. With one elbow resting on the railing and his other hand thoughtfully placed on his chin, he strikes a confident pose. The background features faded concrete walls bathed in soft cinematic lighting with a slightly warm tone. His hairstyle is neat and voluminous, resembling a trendy urban look. Maintain all elements exactly as described—pose, outfit, lighting, body position, angle, and background—but replace the face with [user's face], preserving natural skin tone and lighting.",
        category: "Portrait",
        tags: ["urban", "staircase", "cinematic", "realistic", "casual"]
    },
    {
        id: 13,
        prompt: "Create a 4K HD realistic, stunning portrait of a young Indian man with hair like mine. He is wearing a white and silver sherwani with dhoti and a dupatta draped from his neck, along with a silver watch on his wrist. He is looking directly forward with a soft, serene expression. I want exactly the same face as I uploaded, with 100% accuracy and no alterations. The background is a plain, warm-toned wall illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of his profile and hair on the wall behind him. The overall mood is retro and artistic.",
        category: "Traditional",
        tags: ["indian", "sherwani", "traditional", "portrait", "4k"]
    },
    {
        id: 14,
        prompt: "Create a 4K HD realistic, stunning portrait of a young Indian man with dark, wavy hair. He is wearing a translucent elegant black kurta, looking slightly to his right with a soft serene expression. I want the same face as I uploaded with 100 percent accuracy. The background is a plain warm-toned wall illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of his profile and hair on the wall behind him. The overall mood is retro and artistic.",
        category: "Traditional",
        tags: ["indian", "kurta", "portrait", "artistic", "retro"]
    },
    {
        id: 15,
        prompt: "Create a bright, grainy retro-vintage image based on the reference picture. Style the subject in a perfect plain dark green chiffon shirt with beige pants for a Pinterest-worthy retro aesthetic. Capture a 90s movie feel with dark brown wavy curly hair and a small flower visibly tucked into his curls. Set in a romantic, windy environment with the subject standing against a solid wall. Use deep shadows and dramatic contrast to create a mysterious, artistic atmosphere. Warm golden lighting should evoke a sunset or golden hour glow. Keep the background minimalist with slight texture. The subject's expression should be moody and introspective, yet calm and subtly happy.",
        category: "Fashion",
        tags: ["retro", "green", "90s", "romantic", "golden hour"]
    },
    {
        id: 16,
        prompt: "Create a retro, vintage-style image with bright yet grainy quality based on the reference picture. The subject should wear a perfect red wine colored retro shirt with Pinterest aesthetic appeal, white pants, and hold a rose flower. The scene should evoke a 90s movie feel with a romantic, windy environment. The boy stands against a solid wall with deep shadows and dramatic contrast, creating a mysterious artistic atmosphere. Warm golden lighting suggests sunset or golden hour. The background should be minimalist with slight texture. His facial expression should be moody and introspective, yet calm and subtly happy.",
        category: "Fashion",
        tags: ["retro", "red", "rose", "romantic", "90s"]
    },
    {
        id: 17,
        prompt: "Create a cool young man using the uploaded photo. He has wavy, vintage, clean-cut hair and wears a white t-shirt with light-colored jeans. He's sitting comfortably on a wooden crate, looking to the right while holding a denim jacket. The background features a smoke blue and red effect with a bright black studio scene.",
        category: "Portrait",
        tags: ["cool", "vintage", "studio", "denim", "casual"]
    },
    {
        id: 18,
        prompt: "Use the attached image as the sole reference for the person's face and hairstyle.Maintain the exact same facial features, hairstyle, and overall appearance as shown in the reference image, ensuring a realistic and natural look.Create a high-fashion lifestyle editorial portrait of a 20-year-old Indian man sitting in a modern café. He appears elegant and sophisticated, seated on a wooden chair while holding a white coffee cup with both hands in a refined gesture. His demeanor exudes confidence and charm. Outfit: Structured white shirt with a white blazer casually draped over the shoulders, paired with wide-cut jeans. Accessories: Rectangular sunglasses with gold details, a luxury gold watch, and a bold statement ring. Skin: Natural, youthful complexion with a subtle, glowing highlight.Background: Elegant café setting, softly blurred to emphasize the subject.Lighting: Soft, warm natural light that illuminates his face and creates a luxurious glow as it reflects off the gold accessories.Pose: Body slightly leaning forward.",
        category: "Lifestyle",
        tags: ["cafe", "fashion", "editorial", "luxury", "modern"]
    },
    {
        id: 19,
        prompt: "A vertical 9:16 high-resolution 8K vintage-style flash photograph of a stylish white man standing confidently on a nighttime city street, captured with dramatic fisheye lens distortion. The image features subtle grain, light film scratches, and analog texture for a nostalgic yet editorial feel. He wears an abstract red shirt with bold patterns, partially unbuttoned, revealing his confident, edgy demeanor. Chunky metallic jewelry and fashionable sunglasses enhance his striking streetwear look. The city backdrop is transformed by cozy red ambient lighting, delicate string lights overhead, and a warm atmosphere that blends festivity with the urban night setting. Skin texture appears flawless, with dramatic lighting creating soft shadows and lens flash reflections. The image must be generated entirely based on the uploaded photo, maintaining all characteristics of the main character without distortions or anatomical flaws.",
        category: "Street",
        tags: ["street", "night", "vintage", "urban", "8k"]
    },
    {
        id: 20,
        prompt: "Moody studio portrait of the uploaded person, bathed in golden-orange spotlight that creates a glowing circular halo behind them on the wall. The warm light should sculpt the face and upper body with soft, sunset-like tones, while casting a strong head shadow to the right. Style the person with their eyes closed and chin tilted slightly up.",
        category: "Portrait",
        tags: ["moody", "studio", "golden", "spotlight", "artistic"]
    },
    {
        id: 21,
        prompt: "A hyper-realistic cinematic lifestyle portrait of a stylish young Indian man lounging confidently on modern hanging wicker chair. He wears a trendy all-white coord set with a casual T-shirt and open shirt, paired with colorful designer sneakers and a luxury wristwatch. His expression is cool and composed as he leans back with a relaxed posture, dark sunglasses adding charisma to his look. The setting is a minimal outdoor terrace with subtle decor, soft natural daylight, and a clean modern vibe. Captured in ultra-detailed 8K resolution with sharp textures, natural skin tones, realistic shadows, and a premium fashion editorial aesthetic.",
        category: "Lifestyle",
        tags: ["cinematic", "luxury", "modern", "terrace", "8k"]
    },
    {
        id: 22,
        prompt: "A black-and-white aesthetic portrait of a stylish me (use my image with accurate face 100%) sitting on the floor in dramatic lighting. He is wearing an oversized dark coat. His pose is emotional and introspective, with one hand near his mouth and his head slightly turned to the side. Shadows from a window fall across the wall behind him, creating a moody and artistic atmosphere. The overall vibe is mysterious, emotional, and cinematic.",
        category: "Portrait",
        tags: ["black-white", "dramatic", "emotional", "artistic", "cinematic"]
    },
    {
        id: 23,
        prompt: "A cinematic, moody photograph of a young man standing in a lush green field of tall grass under a cloudy, overcast sky. He is wearing a loose, dark button-up shirt and dark trousers. His posture is expressive and dramatic, leaning slightly backward with one arm outstretched and palm open, as if embracing the wind or the moment. His head is tilted back, eyes closed, and he is wearing large, over-ear silver headphones, giving a sense of calm and emotional release. The perspective is slightly low-angle.",
        category: "Nature",
        tags: ["cinematic", "field", "headphones", "dramatic", "nature"]
    },
    {
        id: 24,
        prompt: "Take a photo taken with a Polaroid camera. The photo should look like an ordinary photograph, without an explicit subject or property. The photo should have a consistent light source, like a flash from a dark room, scattered throughout the photo. Don't change the face. Change the background behind those two people with white curtains. With that boy and me make a cute poses. The quality of the photo must be real good such that it does not reduce when downloaded and uploading somewhere. The photo must be wholesome.",
        category: "Photography",
        tags: ["polaroid", "cute", "couple", "wholesome", "flash"]
    }
];

// Enhanced application state and utilities
const AppState = {
    currentView: 'grid',
    searchTerm: '',
    filteredData: [...promptData],
    isLoading: false
};

// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
    }
};

const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
        color: white;
        padding: var(--spacing-md) var(--spacing-lg);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform var(--transition-normal);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
};

// DOM elements
const gallery = document.getElementById('prompt-gallery');
const searchBar = document.getElementById('search-bar');
const promptCount = document.getElementById('prompt-count');
const resultsCount = document.getElementById('results-count');
const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrompt = document.getElementById('modal-prompt');
const modalCopy = document.getElementById('modal-copy');
const modalCloseBtn = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal-content');

// Initialize demo gallery
const demoGallery = document.getElementById('demo-gallery');
const demoImagesContainer = demoGallery?.querySelector('.demo-images');

if (demoImagesContainer) {
    const demoImages = ['demo_image_female.png', 'Demo_Image_male.png'];
    
    demoImages.forEach(image => {
        const img = document.createElement('img');
        img.src = `public/demo_image/${image}`;
        img.alt = 'Demo Image';
        img.loading = 'lazy';
        img.addEventListener('click', () => openModal(img.src, 'Demo Image', 'Example of AI-generated image using our prompts'));
        demoImagesContainer.appendChild(img);
    });
}

// Enhanced gallery rendering
const renderGallery = (data = AppState.filteredData) => {
    if (!gallery) return;
    
    gallery.innerHTML = '';
    gallery.className = `prompt-gallery ${AppState.currentView === 'list' ? 'list-view' : ''}`;
    
    if (data.length === 0) {
        gallery.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-2xl);">
                <h3>No prompts found</h3>
                <p>Try adjusting your search terms</p>
            </div>
        `;
        return;
    }
    
    data.forEach((item, index) => {
        const card = createPromptCard(item, index);
        gallery.appendChild(card);
    });
    
    updateResultsCount(data.length);
};

const createPromptCard = (item, index) => {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('role', 'article');
    card.setAttribute('aria-labelledby', `prompt-title-${item.id}`);
    card.style.animationDelay = `${index * 0.1}s`;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    
    const img = document.createElement('img');
    img.src = `public/output_image/output_${item.id}.png`;
    img.alt = item.prompt;
    img.loading = 'lazy';
    img.addEventListener('click', () => openModal(img.src, `Prompt ${item.id}`, item.prompt));
    imageContainer.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const promptText = document.createElement('p');
    promptText.id = `prompt-title-${item.id}`;
    promptText.className = 'prompt-text';
    promptText.innerHTML = item.prompt.replace(/\.\s/g, '.<br>');

    const cardActions = document.createElement('div');
    cardActions.className = 'card-actions';

    const copyButton = document.createElement('button');
    copyButton.className = 'action-button copy-button';
    copyButton.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/>
        </svg>
        Copy Prompt
    `;
    copyButton.setAttribute('aria-label', 'Copy prompt text');
    copyButton.addEventListener('click', (e) => handleCopyPrompt(e, item.prompt, copyButton));

    cardActions.appendChild(copyButton);
    cardContent.append(promptText, cardActions);
    card.append(imageContainer, cardContent);
    
    return card;
};

const handleCopyPrompt = async (e, prompt, button) => {
    e.stopPropagation();
    const originalText = button.innerHTML;
    
    try {
        await copyToClipboard(prompt);
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none">
                <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2"/>
            </svg>
            Copied!
        `;
        button.style.background = 'var(--success-color)';
        button.style.color = 'white';
        button.style.borderColor = 'var(--success-color)';
        
        showNotification('Prompt copied to clipboard!');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    } catch (err) {
        showNotification('Failed to copy prompt', 'error');
    }
};

// Modal functionality
const openModal = (imageSrc, title, prompt) => {
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalPrompt.textContent = prompt;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Reset scroll position inside prompt on open
    modalPrompt.scrollTop = 0;
};

const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

// Search functionality
const handleSearch = debounce((searchTerm) => {
    AppState.searchTerm = searchTerm.toLowerCase();
    
    if (!searchTerm) {
        AppState.filteredData = [...promptData];
    } else {
        AppState.filteredData = promptData.filter(item => 
            item.prompt.toLowerCase().includes(AppState.searchTerm) ||
            (item.category && item.category.toLowerCase().includes(AppState.searchTerm)) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(AppState.searchTerm)))
        );
    }
    
    renderGallery();
}, 300);

const updateResultsCount = (count) => {
    if (resultsCount) {
        const total = promptData.length;
        if (count === total) {
            resultsCount.textContent = `Showing all ${total} prompts`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${total} prompts`;
        }
    }
    
    if (promptCount) {
        promptCount.textContent = `${promptData.length} Prompts`;
    }
};

// View controls
const handleViewChange = (view) => {
    AppState.currentView = view;
    
    viewButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });
    
    renderGallery();
};

// Event listeners
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });
    
    searchBar.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchBar.value = '';
            handleSearch('');
        }
    });
}

viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleViewChange(btn.dataset.view);
    });
});

// Modal event listeners
if (modal) {
    // Close when clicking overlay or explicit close button (including its children)
    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('[data-close-modal]')) {
            e.preventDefault();
            closeModal();
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Add event listener for the modal copy button
    if (modalCopy) {
        modalCopy.addEventListener('click', (e) => {
            handleCopyPrompt(e, modalPrompt.textContent, modalCopy);
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Feature tag functionality
document.addEventListener('DOMContentLoaded', () => {
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('click', () => {
            if (searchBar) {
                searchBar.value = tag.textContent;
                handleSearch(tag.textContent);
                searchBar.focus();
            }
        });
    });
});

// Initialize the application
if (gallery) {
    renderGallery();
}