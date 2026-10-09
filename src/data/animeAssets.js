export const loveQuotes = [
  "You are my favorite thought every single day.",
  "With you, every second feels like pure magic.",
  "Your smile lights up even my darkest days.",
  "In your eyes, I found my happiest home.",
  "Falling for you more and more, every morning.",
  "Together with you is my absolute favorite place to be.",
  "Your laughter is the sweetest melody I know.",
  "Loving you is as effortless as breathing.",
  "You are the dream I never want to wake up from.",
  "Every romantic song suddenly makes sense with you.",
  "You make my whole world bloom in colors.",
  "Holding your hand is like holding my entire universe.",
  "My heart chose you, and it will keep choosing you forever.",
  "You are my today and all of my beautiful tomorrows.",
  "A lifetime with you wouldn't be long enough.",
  "You turn ordinary moments into precious treasures.",
  "Because of you, I smile a little softer and laugh a little louder.",
  "You are my warm sunshine on rainy afternoons.",
  "Life by your side is the sweetest adventure ever.",
  "Thank you for being the reason behind my happiness.",
  "Every little glance from you gives me butterflies.",
  "You are my favorite notification and my sweetest hello.",
  "No distance can ever fade what I feel for you.",
  "You make every single heartbeat feel so special.",
  "Wrapped in your arms is where I always want to stay.",
  "You are the sweetest chapter in my life's story.",
  "Forever grateful for every smile you give me.",
  "You are my wish upon every shooting star.",
  "Your presence brings peace to my restless heart.",
  "You are my best friend and my truest love.",
  "I loved you yesterday, love you still, always have, always will.",
  "Your love is the gentle comfort I look forward to.",
  "Under every starry night, I think of you.",
  "You are the spark that keeps my soul bright.",
  "Every love story is beautiful, but ours is my favorite.",
  "My heart does a little dance every time you smile.",
  "You are my once-in-a-lifetime kind of person.",
  "To the world you might be one person, but to me you are the world.",
  "My favorite view will always be you looking at me.",
  "You are my happily-ever-after come true.",
  "May your special day be as sweet and lovely as your heart.",
  "You make every simple day feel like a celebration.",
  "My happiest memories are the ones spent with you.",
  "You are the poetry my heart always wanted to write.",
  "Loving you is the easiest choice I ever made.",
  "You make ordinary days feel extraordinary.",
  "I am so proud and happy to celebrate you today.",
  "You are my favorite hello and my hardest goodbye.",
  "Forever yours, through every laugh and every season.",
  "Happy Birthday to the most special person in my universe."
]

export const localAnimeImages = [
  { url: '/assets/anime/love-laptop-bg.jpg', alt: 'Cute anime couple under umbrella love background' },
  { url: '/assets/anime/wp6031295.jpg', alt: 'Anime girl in summer breeze wallpaper' },
  { url: '/assets/anime/rainy-date.jpeg', alt: 'Anime couple sharing a rainy date' },
  { url: '/assets/anime/sunny-grass-couple.jpeg', alt: 'Anime couple relaxing in green grass' },
  { url: '/assets/anime/chibi-couple.jpeg', alt: 'Cute chibi anime couple smiling' },
  { url: '/assets/anime/heart-gaze.jpeg', alt: 'Anime couple with a blushing heart moment' },
  { url: '/assets/anime/hand-heart-view.jpeg', alt: 'Anime hands making a heart shape' },
  { url: '/assets/anime/pinky-promise.jpeg', alt: 'Anime pinky promise closeup' },
  { url: '/assets/anime/finger-heart.jpeg', alt: 'Anime finger heart illustration' },
  { url: '/assets/anime/love-letter-couple.jpeg', alt: 'Soft anime love letter couple art' },
  { url: '/assets/anime/mini-couple-note.jpeg', alt: 'Small anime couple note illustration' },
  { url: '/assets/anime/chat-couple.jpeg', alt: 'Anime couple chatting online' },
  { url: '/assets/anime/rainy-proposal.jpeg', alt: 'Anime proposal in the rain' },
  { url: '/assets/anime/moonlit-couple.jpeg', alt: 'Anime couple sitting together at night' },
  { url: '/assets/anime/silhouette-couple.jpg', alt: 'Anime couple silhouette scene' },
  { url: '/assets/anime/soft-hug-monochrome.jpeg', alt: 'Monochrome anime couple hug' },
  { url: '/assets/anime/video-call-girl.jpeg', alt: 'Anime girl on a video call' },
  { url: '/assets/anime/rain-note.jpeg', alt: 'Tiny anime rain note illustration' },
  { url: '/assets/anime/sleepy-call.jpeg', alt: 'Anime sleepy video call illustration' },
  { url: '/assets/anime/cartoon-memory.jpeg', alt: 'Cute cartoon couple memory' },
]

export const heroVisual = localAnimeImages[0]
export const messageVisual = localAnimeImages[1]
export const contactVisual = localAnimeImages[5]

export const wishCards = [
  {
    title: 'A Thousand Stars',
    message: 'May your special day be sprinkled with starlight, sweet laughter, and moments you will cherish forever.',
    thumb: localAnimeImages[0].url,
  },
  {
    title: 'Radiant Smile',
    message: 'Your smile turns every ordinary day into something magical and bright. Keep shining your beautiful light.',
    thumb: localAnimeImages[4].url,
  },
  {
    title: 'Heartfelt Blessing',
    message: 'May every quiet wish whispered in your heart today come true, and may gentle peace walk with you always.',
    thumb: localAnimeImages[9].url,
  },
  {
    title: 'Magical Chapters',
    message: 'Here is to a brand new chapter filled with unforgettable adventures, pure happiness, and endless love.',
    thumb: localAnimeImages[2].url,
  },
]

export const animeGalleryItems = loveQuotes.map((quote, index) => {
  const image = localAnimeImages[index % localAnimeImages.length]

  return {
    ...image,
    caption: quote,
  }
})
