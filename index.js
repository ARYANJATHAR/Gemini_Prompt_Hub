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
    },
    {
        id: 25,
        prompt: "Transform the reference picture into: A cinematic 90s Bollywood-style photo of a beautiful woman standing in the rain, holding an umbrella. She's wearing an off-white and blue open pallu saree, wet and draping elegantly over her figure, looking graceful and confident. Her short, wavy, curly hair is dampened by the rain and falls naturally across her face, creating a romantic and dramatic vibe. The scene is illuminated by a soft golden streetlight glow with cinematic rain, capturing her dramatic expression within a romantic atmosphere.",
        category: "Cinematic",
        tags: ["bollywood", "rain", "saree", "romantic", "90s"]
    },
    {
        id: 26,
        prompt: "Dreaming in Flower Field Prompt: Create an image of me sitting in a blooming field of white flowers, smiling warmly and looking to the side. I am wearing a flowy white dress.My dark hair is tied back loosely with a few strands falling naturally. A small flower is tucked near my ear, adding to the soft, dreamy glow. The atmosphere is serene, romantic, and joyful, capturing the essence of a carefree summer day.",
        category: "Nature",
        tags: ["dreamy", "flowers", "summer", "white", "serene"]
    },
    {
        id: 27,
        prompt: "Hyper-realistic overhead 9:16 close-up of myself with glasses, playfully leaning against an ivy-covered stone wall of an old countryside cottage during golden hour. I'm laughing with my head slightly tilted down, one hand brushing away a dangling vine. The flowering vines are in full bloom with orange, magenta, and lavender hues, softly blurred in the foreground.",
        category: "Portrait",
        tags: ["hyper-realistic", "countryside", "golden hour", "ivy", "playful"]
    },
    {
        id: 28,
        prompt: "Black and white fine art portrait of a young woman with short, wavy, slightly messy hair framing her delicate face. She has smooth fair skin and wears an oversized white shirt. The pose shows her sitting with one hand resting gently under her chin, gazing at the camera with a calm, thoughtful expression. Shot in a studio setting with a plain grey backdrop, soft cinematic lighting, and minimalistic composition. Ultra-realistic with sharp facial details, natural textures, and an elegant, sophisticated style. Professional photography in 8K quality.",
        category: "Portrait",
        tags: ["black-white", "fine art", "minimalist", "elegant", "8k"]
    },
    {
        id: 29,
        prompt: "4K HD realistic portrait of a young Indian woman with short, wavy black hair. She sits on an intricately carved, traditional Indian wooden bench, her body angled to display her gentle side profile. She wears a simple yet elegant maroon cotton saree with minimal Indian print. Deeply immersed in reading a book, she has a calm, thoughtful expression. The face must remain 100% identical to the uploaded photo without any alteration. The background features a peaceful garden with soft greenery and dappled sunlight filtering through trees, creating a natural, serene atmosphere. The overall mood is retro, artistic, and nostalgic, evoking timeless vintage charm.",
        category: "Traditional",
        tags: ["indian", "saree", "reading", "garden", "vintage"]
    },
    {
        id: 30,
        prompt: "A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). She stands tall in a dark, moody studio, surrounded by soft drifting smoke under a dramatic spotlight. Outfit: Oversized slate-blue luxury suit with wide-leg trousers, paired with a slightly unbuttoned white silk shirt. Her hands are tucked casually in pockets, shoulders relaxed, with a confident expression and head tilted slightly upward.",
        category: "Fashion",
        tags: ["editorial", "suit", "spotlight", "smoke", "cinematic"]
    },
    {
        id: 31,
        prompt: "A stylish man (photo uploaded) sitting confidently on a simple metal stool against a solid warm yellow background. He wears a cozy oversized beige fleece jacket layered over a cream hoodie, paired with matching cream jogger pants. On his feet, he sports chunky white sneakers with purple accents, giving a modern streetwear vibe. His relaxed pose, with hands resting naturally between his legs, conveys calm confidence & a good smile. The lighting is soft and even, highlighting the textures of",
        category: "Fashion",
        tags: ["streetwear", "fleece", "yellow", "modern", "casual"]
    },
    {
        id: 32,
        prompt: "A bearded man reclines on a mustard yellow couch, dressed in a brown suit with matching pants and a dark brown fedora tilted on his head. He holds a glass of amber liquid—likely whiskey with ice—while wearing a relaxed, contemplative expression with his eyes slightly closed. His left arm is bent with his hand near his hat, while his right hand grips the glass. His bare feet are visible, and beside him on the couch lie scattered papers and magazines.",
        category: "Lifestyle",
        tags: ["suit", "whiskey", "fedora", "yellow", "relaxed"]
    },
    {
        id: 33,
        prompt: "A stunning portrait of a young Indian man with dark hair. He is wearing a black T-shirt under an elegant black 3-piece suit, with a Bugatti watch on his left wrist. He is looking slightly to his right with a soft, serene expression. I want the same face as I uploaded with no alteration - 100 percent same. The background is a plain, warm-toned wall illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of his profile and hair on the wall behind him. The overall mood is retro and artistic.",
        category: "Portrait",
        tags: ["suit", "elegant", "warm", "retro", "artistic"]
    },
    {
        id: 34,
        prompt: "Ultra realistic candid photo of a person (as in reference), standing in a crowded place with people holding cameras and taking photos. The background is filled with fans and a slight chaos of crowd, giving a true celebrity vibe. The photo should look like a real-life captured moment, with natural lighting, sharp details, and authentic atmosphere.",
        category: "Celebrity",
        tags: ["crowd", "candid", "realistic", "fans", "celebrity"]
    },
    {
        id: 35,
        prompt: "A cinematic, moody photograph of a young man standing in a lush green field of tall grass under a cloudy, overcast sky. He wears a loose, dark button-up shirt and dark trousers. His posture is expressive and dramatic—leaning slightly backward with one arm outstretched, palm open, as if embracing the wind or the moment. His head is tilted back, eyes closed, wearing large silver over-ear headphones that convey a sense of calm and emotional release. The perspective is slightly low-angle, with blurred grass in the foreground creating a dreamy depth of field. The color grading features muted green and gray tones, with soft, diffused natural lighting creating a serene, reflective, and slightly melancholic mood. The image is atmospheric and intimate, capturing a quiet moment of solitude and freedom.",
        category: "Nature",
        tags: ["cinematic", "field", "headphones", "dramatic", "moody"]
    },
    {
        id: 36,
        prompt: "Use the uploaded face image as a strict identity reference, preserving exact facial features, proportions, skin texture, natural hair, and expression. Create a retro grainy 90's European-inspired portrait with Pinterest aesthetic. The subject poses against a solid wall (leaning back) with dramatic shadows. He wears a brown corduroy blazer over a cream ribbed turtleneck, paired with brown plaid pleated loose trousers and polished leather shoes. His pose is upright and formal with hands relaxed at his sides, exuding a vintage cinematic mood. Warm, directional lighting casts deep contrast on the wall, while film grain, subtle scratches, and warm color grading enhance the authentic retro atmosphere.",
        category: "Fashion",
        tags: ["retro", "european", "corduroy", "grainy", "vintage"]
    },
    {
        id: 37,
        prompt: "35mm film still shot on Kodak Portra 400, featuring retro vintage grain with warm tones. A young man wearing a loose pastel blue linen shirt tucked into high-waist trousers stands against a textured concrete wall. Golden-hour sunlight creates dramatic chiaroscuro lighting—half his face in deep shadow, half illuminated by amber light. A gentle breeze lifts his wavy hair. His expression is calm, nostalgic, and slightly melancholic. The composition is cinematic with a minimalist background, embodying a 90s indie film aesthetic.",
        category: "Fashion",
        tags: ["35mm", "film", "kodak", "golden hour", "vintage"]
    },
    {
        id: 38,
        prompt: "Use the uploaded face image as a strict identity reference, preserving exact facial features, proportions, skin texture, natural hair, and expression from the original. Create a retro grainy 90's movie-style portrait with a Pinterest-inspired European aesthetic. The subject stands against a plain wall with dramatic shadows, hands in pockets, striking an elegant pose. He wears a green corduroy blazer over a cream ribbed turtleneck sweater, paired with grey pleated trousers and a brown leather belt—all styled to evoke classic European retro fashion. Moody directional lighting creates strong highlights and deep contrast, while film grain, warm tones, and subtle scratches enhance the authentic cinematic vintage atmosphere.",
        category: "Fashion",
        tags: ["retro", "european", "corduroy", "green", "cinematic"]
    },
    {
        id: 39,
        prompt: "Use the uploaded face image as the strict locked identity reference, preserving exact facial features, proportions, skin texture, natural hair, and facial expression from the original. Recreate the exact styling, pose, and atmosphere as in the reference photo. The subject stands upright against a plain textured wall with a sharp diagonal beam of sunlight casting deep shadows, creating dramatic contrast. He wears a brown textured knit sweater layered over a white collared shirt—with collar and cuffs slightly visible—tucked into high-waisted brown pleated trousers and paired with polished brown leather loafers. His stance is straight with arms relaxed at his sides, conveying confidence and composure. Strong, golden directional lighting emphasizes clothing and wall textures while casting a crisp shadow silhouette. The full-body, front-facing shot features cinematic grading, warm tones, and subtle grain for a refined editorial style.",
        category: "Fashion",
        tags: ["editorial", "sunlight", "sweater", "pleated", "dramatic"]
    },
    {
        id: 40,
        prompt: "High-contrast black & white photo in a modern art gallery. A candid 'stolen shot' of a young woman standing still amid a blurred moving crowd. The image is taken at a slightly slanted angle, with her face partially turned away from the camera (not a full side view). A 3/4 body shot showing her from mid-thigh up. She wears a long dark coat with hands in pockets. Behind her, framed Banks artworks are arranged in a grid pattern.",
        category: "Art",
        tags: ["black-white", "gallery", "candid", "crowd", "artistic"]
    },
    {
        id: 41,
        prompt: "A low-angle, black and white photograph of me (based on uploaded reference) in a long black trench coat, standing amidst a flurry of pigeons flying overhead. I'm looking directly at the viewer with a serious expression. The pigeons appear blurred and in various stages of flight, creating a dynamic and slightly ominous atmosphere. The background features a stark, overcast sky with hints of trees at the bottom. The overall mood is mysterious and dramatic.",
        category: "Artistic",
        tags: ["black-white", "pigeons", "dramatic", "trench coat", "mysterious"]
    },
    {
        id: 42,
        prompt: "A moody, cinematic portrait of a woman wearing a cap backwards, sitting on a wooden chair in a dimly lit room. She wears a loose cream-colored blouse with ruffles, her expression contemplative and lost in thought. Around her, sheets of paper are dramatically suspended in mid-air, as if caught in motion, creating a surreal, dreamlike atmosphere. The lighting casts soft shadows on the wall, emphasizing the mysterious and artistic mood of the scene.",
        category: "Cinematic",
        tags: ["moody", "surreal", "papers", "dreamlike", "cap"]
    },
    {
        id: 43,
        prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinteresty aesthetic retro shirt with white pant and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
        category: "Fashion",
        tags: ["retro", "red", "rose", "90s", "golden hour"]
    },
    {
        id: 44,
        prompt: "A romantic scene of a young couple standing close together in the rain on a wet street during evening, warm streetlights glowing softly in the background. The man is wearing a light beige shirt and light brown pants, gently touching the woman's head with one hand. The woman is wearing a light blue traditional dress with subtle white floral embroidery, holding the man's waist with one hand. The scene has a cinematic, soft, dreamy atmosphere with shallow depth of field and wet hair effect. and glowing streetlights, creating an intimate, dreamy, and romantic atmosphere",
        category: "Romantic",
        tags: ["rain", "couple", "evening", "dreamy", "cinematic"]
    },
    {
        id: 45,
        prompt: "Create a portrait of the above reference with a serene expression, where the girl looks like Radha with maroon, very long wavy hair flowing freely and minimal kolka art on her forehead. Include a peacock feather in her flowing hair. She's wearing a pink and white contrast chiffon lehenga paired with golden jewelry and holding a flute in her hand. Keep the background a solid white wall, minimal and lit with a gradient of warm blue and warm red. HD neon light reflects on the image, creating a dreamy, cinematic aesthetic with golden hour glow, warm tones and shadow. The image should have a professional portrait photography vibe with smooth skin tones, sharp details, and a slight retro vintage touch. Keep the face",
        category: "Traditional",
        tags: ["radha", "lehenga", "peacock", "flute", "neon"]
    },
    {
        id: 46,
        prompt: "Ultra-realistic, high-resolution cinematic portrait of a person standing confidently against a dark, textured background with soft, diffused lighting. The face matches the uploaded image, preserving all facial features exactly. He wears round, black sunglasses with thin frames that reflect soft ambient light. He is dressed in an impeccably tailored black bandhgala suit with a high collar, sharp seams, and a slight sheen highlighting the fabric's quality. The jacket is fastened with elegant, round metallic buttons and features a decorative brooch on the left chest—a golden cat figure resting atop a polished green gemstone. His posture is relaxed yet dignified, with his left hand casually in his trouser pocket and his right hand hanging by his side. He gazes thoughtfully to his left with a calm, composed expression, slightly pursed lips, and a focused look. The lighting softly accentuates the contours of his face and suit, casting subtle shadows that enhance depth and realism. The overall atmosphere is sophisticated, elegant, and refined—perfect for a high-fashion or celebrity portrait.",
        category: "Fashion",
        tags: ["bandhgala", "cinematic", "sophisticated", "sunglasses", "brooch"]
    },
    {
        id: 47,
        prompt: "Ultra-realistic cinematic close-up of a rugged person riding a powerful dark brown horse with a distinct white mark on its forehead at sunset. The man wears a stylish, worn-in brown leather jacket with visible stitching and texture, layered over a clean white polo shirt. His beige slim-fit pants show subtle dirt marks near the knees, complemented by a dark leather belt with a matte metal buckle. His face matches the uploaded image, preserving all facial features exactly, with slightly wind-blown hair. Black aviator sunglasses reflect the fading orange sky as he maintains a confident, commanding posture. In his right hand, he holds a polished wooden stick slightly extended behind him, suggesting movement and action. The horse's high-quality black leather bridle and saddle feature detailed metal fittings, while its tense, defined muscles convey speed and strength. The background blends blurred green trees with a soft-focus orange and pink sky. Dust clouds rise from the ground, adding depth and realism. Golden hour lighting highlights the textures of leather and fabric, while soft shadows enhance the contours of both rider and horse. The atmosphere feels intense, adventurous, and cinematic—evoking bravery, determination, and motion.",
        category: "Action",
        tags: ["horse", "sunset", "leather", "cinematic", "rugged"]
    },
    {
        id: 48,
        prompt: "Ultra realistic, high resolution cinematic image of a person standing beside a rugged black off-road jeep in an open rural landscape during golden hour. The scene features soft, warm lighting with the subject's face matching the uploaded reference image, preserving all facial features exactly. He has wavy black hair and wears a black and white checkered shirt with rolled-up sleeves, unbuttoned at the chest to subtly reveal his torso. A deep red traditional cloth with white borders is tied around his waist, flowing naturally.His left hand grips a Leviathan Axe while his right hand rests confidently on the jeep's hood. The matte black jeep features large tires, detailed metallic parts, and a soft roof with slight weathering for realism. The background showcases a gradient sky—pale yellow at the horizon blending into cool grey-blue above—with soft clouds adding depth. The surrounding landscape appears softly blurred with warm light hitting the edges and cool shadows providing tonal balance.The image uses a slightly desaturated color palette with earthy tones, soft contrast, and natural warmth that precisely captures the original photo's cinematic mood. Fine dust particles catch the light, while subtle lens flares enhance the atmosphere without overwhelming the scene. Textures from fabric folds to skin pores appear detailed and realistic, with lighting and color grading that maintain the subtle softness and mood of the original photo.",
        category: "Adventure",
        tags: ["jeep", "axe", "golden hour", "cinematic", "rural"]
    },
    {
        id: 49,
        prompt: "Ultra-realistic cinematic portrait of a person standing inside a beautifully crafted wooden room, leaning slightly against a paneled wooden wall next to large glass windows. He wears a perfectly tailored black suit jacket with a crisp white dress shirt underneath, paired with a loosely knotted black tie that gives him a relaxed yet sophisticated appearance. His short, well-groomed hair is styled neatly. The face matches the uploaded reference image, preserving all facial features exactly. A subtle, elegant tattoo is visible on the side of his neck, adding a touch of personality and edge to his look. Warm sunlight filters through the window, casting soft golden highlights on his face and shoulders, creating a mood of quiet contemplation. His gaze is directed thoughtfully out the window toward the greenery outside, as if lost in deep thought. The background features a blurred garden view with soft natural light and shadows, while the wooden window frames and paneling add texture and richness to the atmosphere. The overall composition is balanced, with soft lighting, warm tones, and intricate details that enhance the sense of realism and emotion in the scene.",
        category: "Lifestyle",
        tags: ["suit", "wooden", "sunlight", "contemplative", "cinematic"]
    },
    {
        id: 50,
        prompt: "Create a retro, vintage-inspired image - grainy yet bright -based on the reference picture. The boy should be wearing in a white shirt with small brown flower prints, paired with plated beige pant styled in a Pinterest-inspired aesthetic. The vibe must capture the essence of a 90s movie dark-brown-haired baddie, hair waving by a windy, romantic atmosphere. He is sitting on a wooden bench as a few leaves blow in the air, while dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting",
        category: "Fashion",
        tags: ["retro", "floral", "90s", "romantic", "bench"]
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
        
        // Use optimized demo images with fallback to original
        const optimizedSrc = `public/demo_image_optimized/${image.replace('.png', '.webp')}`;
        const fallbackSrc = `public/demo_image/${image}`;
        
        img.src = optimizedSrc;
        img.alt = 'Demo Image';
        img.loading = 'lazy';
        
        // Fallback to original PNG if optimized WebP fails
        img.onerror = () => {
            if (img.src === optimizedSrc) {
                img.src = fallbackSrc;
            }
        };
        
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
    
    // Use optimized images with fallback to original
    const optimizedSrc = `public/output_image_optimized/output_${item.id}.webp`;
    const fallbackSrc = `public/output_image/output_${item.id}.png`;
    
    img.src = optimizedSrc;
    img.alt = item.prompt;
    img.loading = 'lazy';
    
    // Fallback to original PNG if optimized WebP fails
    img.onerror = () => {
        if (img.src === optimizedSrc) {
            img.src = fallbackSrc;
        }
    };
    
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