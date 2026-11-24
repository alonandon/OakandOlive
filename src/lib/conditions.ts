// Condition landing pages (/conditions/[slug]).
//
// Each condition gets its own URL so Google has a dedicated page to rank for
// searches like "back pain relief rochester" or "sciatica chiropractor
// rochester ny". Search Console showed these searches landing at positions
// 20–80 because the only match was a card on /conditions.
//
// `slug` intentionally matches the old card anchor ids so existing links to
// /conditions#<id> (e.g. from blog posts) keep working.
//
// Clinical copy should be reviewed by Dr. Eckert before deploying.

export interface Condition {
  slug: string
  name: string
  /** Short blurb used on the /conditions index card. */
  summary: string
  /** <title> text (brand is appended automatically). Keep under ~45 chars. */
  metaTitle: string
  /** Meta description, ~150–160 characters. */
  metaDescription: string
  /** H1 on the condition page. */
  heading: string
  intro: string[]
  symptoms: string[]
  causes: string[]
  approach: string[]
  /** Service ids from /services (anchors). */
  services: string[]
  redFlags: string[]
  faqs: { question: string; answer: string }[]
  /** Blog post slugs to link as further reading. */
  relatedPosts: string[]
}

export const serviceLabels: Record<string, string> = {
  cmt: 'Chiropractic Adjustments (CMT)',
  'flexion-distraction': 'Flexion Distraction & Spinal Decompression',
  iastm: 'IASTM (Graston-style soft-tissue work)',
  shockwave: 'Shockwave Therapy',
  bfrt: 'Blood Flow Restriction Training (BFRT)',
  cupping: 'Cupping Therapy',
  'nerve-flossing': 'Nerve Flossing',
  nutrition: 'Nutrition',
  exercise: 'Exercise Programming',
}

const standardRedFlags = [
  'Loss of bladder or bowel control, or numbness in the groin or inner thighs',
  'Pain after a significant fall, collision, or other trauma',
  'Unexplained weight loss, fever, or a history of cancer alongside new pain',
  'Rapidly worsening weakness in an arm or leg',
]

export const conditions: Condition[] = [
  {
    slug: 'lower-back-pain',
    name: 'Lower Back Pain',
    summary:
      'One of the most common reasons patients seek chiropractic care. We identify the root cause — whether muscular, disc-related, or structural — and build a plan to get you moving pain-free.',
    metaTitle: 'Lower Back Pain Relief in Rochester, NY',
    metaDescription:
      'Lower back pain treatment in Rochester, NY. Adjustments, flexion distraction, soft-tissue work, and rehab exercise to relieve pain and keep it from coming back.',
    heading: 'Lower Back Pain Relief in Rochester, NY',
    intro: [
      'Most adults deal with lower back pain at some point, and for many people it keeps coming back. It might start with lifting, raking leaves, a long drive, or nothing obvious at all.',
      'At Oak & Olive Chiropractic, we start by finding out what is actually driving your pain — joint restriction, irritated muscles, a disc, or the way you move — and then build a plan that treats the cause, not just the symptom.',
    ],
    symptoms: [
      'Dull, aching pain across the low back or on one side',
      'Stiffness when getting out of bed or standing up from a chair',
      'Pain that worsens with sitting, bending, or lifting',
      'Muscle tightness or spasm',
      'Pain that spreads into the buttock or hip',
    ],
    causes: [
      'Lifting, twisting, or a sudden awkward movement',
      'Long hours sitting at a desk or in the car',
      'Joint restriction in the lumbar spine or pelvis',
      'Disc irritation or herniation',
      'Weak or poorly coordinated core and hip muscles',
    ],
    approach: [
      'Your first visit includes a detailed history and an orthopedic and neurological exam so we can rule out anything that needs a different kind of care and understand what is driving your pain.',
      'Treatment usually combines chiropractic adjustments to restore joint motion, flexion distraction for disc-related pain, soft-tissue work for tight and guarded muscles, and a short list of exercises you can do at home.',
      'As you improve, the focus shifts to strength and movement so the pain is less likely to return.',
    ],
    services: ['cmt', 'flexion-distraction', 'iastm', 'exercise'],
    redFlags: standardRedFlags,
    faqs: [
      {
        question: 'How many visits does lower back pain usually take?',
        answer:
          'It depends on how long you have had the pain and what is causing it. Many patients with recent back pain notice meaningful improvement within the first few visits. We will give you a clear plan and timeline after your exam.',
      },
      {
        question: 'Should I rest or stay active with back pain?',
        answer:
          'For most back pain, gentle movement is better than bed rest. We will show you which activities are safe to keep doing and which to modify while you recover.',
      },
      {
        question: 'Do I need an MRI before seeing a chiropractor?',
        answer:
          'Usually not. Most back pain does not need imaging. If your exam suggests imaging is warranted, we will tell you and help coordinate it.',
      },
    ],
    relatedPosts: [
      'low-back-pain-relief-rochester-ny',
      'low-back-pain-causes-red-flags-rochester-ny',
      'raking-leaves-back-pain-rochester',
    ],
  },
  {
    slug: 'neck-pain-stiffness',
    name: 'Neck Pain & Stiffness',
    summary:
      'Tension, poor posture, and injury can all create neck pain that radiates into the shoulders and arms. Targeted adjustments and soft-tissue work restore mobility and relieve discomfort.',
    metaTitle: 'Neck Pain Treatment in Rochester, NY',
    metaDescription:
      'Neck pain and stiffness treatment in Rochester, NY. Chiropractic adjustments, IASTM, cupping, and posture-focused exercise for desk workers, drivers, and athletes.',
    heading: 'Neck Pain & Stiffness Treatment in Rochester, NY',
    intro: [
      'Neck pain can make it hard to turn your head, sleep, drive, or focus at work. It often comes with tight shoulders, headaches, or pain that travels toward the shoulder blade or arm.',
      'We look at the joints of your neck and upper back, the surrounding muscles, and your daily posture and habits to find out why your neck is hurting and what will help it stay better.',
    ],
    symptoms: [
      'Stiffness or reduced ability to turn or tilt your head',
      'Aching between the shoulder blades or across the top of the shoulders',
      'Headaches that start at the base of the skull',
      'Pain that increases after screen time or driving',
      'Tingling or pain into the arm (which needs a careful exam)',
    ],
    causes: [
      'Prolonged sitting and screen use ("tech neck")',
      'Sleeping in an awkward position',
      'Whiplash or other injuries',
      'Joint restriction in the neck and upper back',
      'Muscle tension and stress',
    ],
    approach: [
      'After a thorough exam, treatment typically includes gentle chiropractic adjustments to the neck and upper back, soft-tissue work such as IASTM or cupping for tight muscles, and mobility exercises.',
      'We also look at your workstation, phone habits, and sleep setup, because small changes there often make the biggest long-term difference.',
    ],
    services: ['cmt', 'iastm', 'cupping', 'exercise'],
    redFlags: [
      'Neck pain after a car accident, fall, or blow to the head',
      'Severe headache unlike any you have had before',
      'Dizziness, trouble speaking, vision changes, or difficulty swallowing',
      'Progressive weakness or numbness in the arms or hands',
    ],
    faqs: [
      {
        question: 'Are neck adjustments safe?',
        answer:
          'For most people, neck adjustments are a safe and effective treatment when performed after a proper exam. If adjustments are not right for you, or you would simply prefer not to have them, we have gentle alternatives, including instrument-assisted adjusting and soft-tissue work.',
      },
      {
        question: 'Can my desk setup cause neck pain?',
        answer:
          'Yes. A low monitor, a laptop without a stand, or long stretches without moving can all load the neck. We will give you practical, specific changes to make.',
      },
    ],
    relatedPosts: [
      'neck-pain-relief-rochester-ny',
      'tech-neck-neck-pain-rochester-ny',
      'desk-job-spine-health-rochester',
    ],
  },
  {
    slug: 'sciatica-nerve-pain',
    name: 'Sciatica & Nerve Pain',
    summary:
      'Sciatic pain that shoots down the leg can be debilitating. We address the underlying nerve irritation with spinal decompression, adjustments, and nerve mobilization techniques.',
    metaTitle: 'Sciatica Treatment in Rochester, NY',
    metaDescription:
      'Non-surgical sciatica treatment in Rochester, NY. Flexion distraction, nerve flossing, and targeted rehab to calm leg pain, numbness, and tingling.',
    heading: 'Sciatica & Nerve Pain Treatment in Rochester, NY',
    intro: [
      'Sciatica is pain, numbness, or tingling that travels from the low back or buttock down the leg. It is a symptom rather than a diagnosis: something is irritating the nerve roots that form the sciatic nerve.',
      'Our job is to figure out what that something is — often a disc, sometimes joint or muscle tightness — and to calm the nerve down with conservative, non-surgical care.',
    ],
    symptoms: [
      'Pain that shoots from the buttock down the back or side of the leg',
      'Numbness, tingling, or "pins and needles" in the leg or foot',
      'Pain that is worse with sitting, coughing, or sneezing',
      'Leg weakness or a feeling that the leg gives out',
    ],
    causes: [
      'Disc herniation or bulging disc in the lower back',
      'Narrowing around the nerve roots (stenosis)',
      'Tightness or irritation in the deep hip muscles',
      'Joint dysfunction in the low back or pelvis',
    ],
    approach: [
      'We perform neurological testing — reflexes, strength, and sensation — to see which nerve is involved and how irritated it is.',
      'Care often includes flexion distraction to take pressure off the disc and nerve, nerve flossing to restore the nerve’s ability to glide, adjustments where appropriate, and a progressive home program.',
      'If your exam shows signs that need a medical or surgical opinion, we will refer you promptly.',
    ],
    services: ['flexion-distraction', 'nerve-flossing', 'cmt', 'exercise'],
    redFlags: standardRedFlags,
    faqs: [
      {
        question: 'Can a chiropractor help sciatica without surgery?',
        answer:
          'Many people with sciatica improve with conservative care such as decompression, specific exercise, and nerve mobilization. Surgery is typically reserved for severe or progressive nerve problems, and we will refer you if that is the case.',
      },
      {
        question: 'How long does sciatica take to improve?',
        answer:
          'It varies. Some cases settle in a few weeks, while others take longer. Tracking changes in leg symptoms helps us measure progress — pain moving out of the leg and back toward the spine is usually a good sign.',
      },
    ],
    relatedPosts: ['sciatica-symptoms-causes-non-surgical-relief', 'low-back-pain-causes-red-flags-rochester-ny'],
  },
  {
    slug: 'headaches-migraines',
    name: 'Headaches & Migraines',
    summary:
      'Many headaches are linked to tension in the neck and upper back. Chiropractic care and soft-tissue work can help reduce how often they happen and how intense they are.',
    metaTitle: 'Headache Relief Chiropractor in Rochester, NY',
    metaDescription:
      'Chiropractic care for tension and neck-related headaches in Rochester, NY. Adjustments, soft-tissue work, and posture changes to reduce headache frequency.',
    heading: 'Headache & Migraine Care in Rochester, NY',
    intro: [
      'Headaches that start at the base of your skull, wrap around your head, or come with a stiff neck are often connected to the joints and muscles of the neck. These are called tension-type and cervicogenic (neck-related) headaches.',
      'Chiropractic care focuses on those neck-related drivers. For people who also have migraines, reducing neck tension and identifying triggers can be a helpful part of an overall plan alongside their medical provider.',
    ],
    symptoms: [
      'Headache that starts in the neck or base of the skull',
      'Band-like pressure around the head',
      'Headaches that follow long periods at a desk or driving',
      'Neck stiffness or tender points in the neck and shoulders',
    ],
    causes: [
      'Joint restriction in the upper neck',
      'Muscle tension in the neck, jaw, and shoulders',
      'Posture and screen habits',
      'Stress, poor sleep, and dehydration',
    ],
    approach: [
      'We start by confirming your headache pattern and screening for warning signs that need medical evaluation.',
      'Treatment may include gentle adjustments to the upper neck and back, soft-tissue work for the muscles at the base of the skull, and specific exercises to improve posture and neck endurance. Keeping a simple headache log helps us measure progress.',
    ],
    services: ['cmt', 'iastm', 'cupping', 'exercise'],
    redFlags: [
      'Sudden, severe "worst headache of your life"',
      'Headache with fever, stiff neck, confusion, or rash',
      'Headache after a head injury',
      'New headaches with vision loss, weakness, numbness, or trouble speaking',
    ],
    faqs: [
      {
        question: 'Can a chiropractor help migraines?',
        answer:
          'Chiropractic care is most helpful for headaches that come from the neck. Some people with migraines find that reducing neck tension helps, but migraines are a neurological condition and are best managed together with your medical provider.',
      },
      {
        question: 'How do I know if my headache is coming from my neck?',
        answer:
          'Clues include headaches that start at the base of the skull, get worse with certain neck positions, or come with neck stiffness. A hands-on exam helps confirm it.',
      },
    ],
    relatedPosts: ['neck-headaches-migraines-rochester-ny', 'tech-neck-neck-pain-rochester-ny'],
  },
  {
    slug: 'sports-athletic-injuries',
    name: 'Sports & Athletic Injuries',
    summary:
      'From weekend warriors to competitive athletes, we help you recover faster and perform better using a combination of manual therapy, rehab exercise, and soft-tissue treatment.',
    metaTitle: 'Sports Injury Chiropractor in Rochester, NY',
    metaDescription:
      'Sports injury care in Rochester, NY for runners, lifters, golfers, and youth athletes. Soft-tissue work, shockwave, BFRT, and return-to-sport rehab.',
    heading: 'Sports Injury Treatment in Rochester, NY',
    intro: [
      'Whether you lift, run, golf, play hockey, or chase your kids around the yard, an injury that keeps you from training is frustrating. Our goal is to get you back to your sport — and to understand why the injury happened so it is less likely to happen again.',
      'Dr. Eckert has a background in exercise science and uses an active, rehab-focused approach rather than passive treatment alone.',
    ],
    symptoms: [
      'Muscle strains and tendon pain (tendinopathy)',
      'Joint pain during or after training',
      'Loss of range of motion or power',
      'Nagging injuries that keep coming back',
    ],
    causes: [
      'Training load increasing too quickly',
      'Movement or mobility limitations',
      'Strength imbalances between sides or muscle groups',
      'Inadequate recovery',
    ],
    approach: [
      'We assess how you move in your sport, not just where it hurts.',
      'Treatment may combine IASTM and cupping for soft tissue, shockwave therapy for stubborn tendon problems, blood flow restriction training to build strength while the tissue heals, and a progressive return-to-sport plan.',
    ],
    services: ['iastm', 'shockwave', 'bfrt', 'cupping', 'exercise'],
    redFlags: [
      'A pop followed by immediate swelling or inability to bear weight',
      'Visible deformity of a joint or bone',
      'Head injury or concussion symptoms',
      'Numbness or weakness after an injury',
    ],
    faqs: [
      {
        question: 'Do I have to stop training while I recover?',
        answer:
          'Usually not completely. We will help you adjust your training so you can keep moving and stay fit while the injured area heals.',
      },
      {
        question: 'What is blood flow restriction training?',
        answer:
          'BFRT uses a specialized cuff to partially limit blood flow during light exercise, which allows strength gains with much lighter loads — useful when an injury will not tolerate heavy lifting.',
      },
    ],
    relatedPosts: [
      'blood-flow-restriction-training-rochester-ny',
      'iastm-graston-style-soft-tissue-work-rochester-ny',
      'shockwave-therapy-how-it-works-what-to-expect',
    ],
  },
  {
    slug: 'auto-accident-whiplash',
    name: 'Auto Accident / Whiplash',
    summary:
      'Whiplash and other collision-related injuries need prompt, expert care. We document your injuries thoroughly and guide you through a full recovery.',
    metaTitle: 'Auto Accident & Whiplash Chiropractor, Rochester',
    metaDescription:
      'Car accident and whiplash care in Rochester, NY. Thorough exams, clear documentation, and treatment for neck and back injuries after a collision.',
    heading: 'Auto Accident & Whiplash Care in Rochester, NY',
    intro: [
      'Even a low-speed collision can strain the neck and back. Symptoms often show up hours or days later, which is why getting checked after an accident matters even if you feel fine at first.',
      'We provide a thorough evaluation, detailed documentation of your injuries, and a treatment plan to help you recover.',
    ],
    symptoms: [
      'Neck pain and stiffness',
      'Headaches',
      'Upper or lower back pain',
      'Shoulder or arm pain, numbness, or tingling',
      'Pain or stiffness that appears a day or two after the accident',
    ],
    causes: [
      'Rapid back-and-forth movement of the head and neck',
      'Seat belt and impact forces on the chest, shoulder, and low back',
      'Muscle and ligament strain',
    ],
    approach: [
      'Your first visit includes a full history of the accident and a detailed exam. If imaging or a medical evaluation is needed, we will refer you.',
      'Care typically starts gently and progresses: soft-tissue work and gentle adjustments early, then strengthening and mobility exercises as healing allows.',
    ],
    services: ['cmt', 'iastm', 'exercise'],
    redFlags: [
      'Severe neck pain, or any numbness or weakness, right after a crash — go to the ER',
      'Loss of consciousness, confusion, or worsening headache',
      'Chest or abdominal pain',
    ],
    faqs: [
      {
        question: 'Should I see a chiropractor after a car accident if I feel fine?',
        answer:
          'It is a good idea to get checked. Whiplash symptoms are often delayed, and an early exam creates a baseline record of your condition.',
      },
      {
        question: 'Do you work with no-fault insurance?',
        answer:
          'Please call our office at (585) 429-5100 and we will walk you through coverage for your specific situation.',
      },
    ],
    relatedPosts: ['auto-accident-chiropractor-rochester-ny'],
  },
  {
    slug: 'disc-herniation',
    name: 'Disc Herniation',
    summary:
      'Herniated or bulging discs can compress nerves and cause significant pain. Flexion distraction, spinal decompression, and targeted rehab can provide lasting relief without surgery.',
    metaTitle: 'Herniated Disc Treatment in Rochester, NY',
    metaDescription:
      'Non-surgical herniated and bulging disc treatment in Rochester, NY. Flexion distraction, spinal decompression, and rehab for back and leg pain.',
    heading: 'Herniated & Bulging Disc Treatment in Rochester, NY',
    intro: [
      'A herniated or bulging disc happens when the cushion between two vertebrae is injured and irritates nearby tissues or nerves. It can cause intense back pain, leg or arm pain, or both.',
      'The good news: most disc herniations improve with conservative care. Our approach focuses on taking pressure off the disc, calming the nerve, and rebuilding strength.',
    ],
    symptoms: [
      'Sharp or deep low back or neck pain',
      'Pain, numbness, or tingling into a leg or arm',
      'Pain that worsens with sitting, bending, coughing, or sneezing',
      'Muscle weakness in the leg or arm',
    ],
    causes: [
      'Repetitive bending and lifting',
      'A sudden heavy lift or twist',
      'Prolonged sitting',
      'Age-related disc changes',
    ],
    approach: [
      'We confirm the likely disc involvement with orthopedic and neurological testing and review any imaging you already have.',
      'Flexion distraction and spinal decompression gently open the space around the disc. We pair that with movement strategies to reduce flare-ups and a progressive strengthening plan.',
      'If you have progressive weakness or other signs that need a surgical opinion, we will refer you.',
    ],
    services: ['flexion-distraction', 'nerve-flossing', 'exercise', 'cmt'],
    redFlags: standardRedFlags,
    faqs: [
      {
        question: 'What is spinal decompression?',
        answer:
          'Spinal decompression and flexion distraction use a specialized table to gently stretch and move the spine, reducing pressure on the disc and nerve. It is comfortable and non-surgical.',
      },
      {
        question: 'Will my herniated disc heal on its own?',
        answer:
          'Many disc herniations shrink and become less painful over time. Treatment aims to reduce pain sooner, help you stay active, and lower the chance of recurrence.',
      },
    ],
    relatedPosts: ['sciatica-symptoms-causes-non-surgical-relief', 'low-back-pain-causes-red-flags-rochester-ny'],
  },
  {
    slug: 'shoulder-pain',
    name: 'Shoulder Pain',
    summary:
      'Rotator cuff issues, impingement, and shoulder stiffness respond well to chiropractic and soft-tissue therapy. We work to restore full range of motion and reduce pain.',
    metaTitle: 'Shoulder Pain Treatment in Rochester, NY',
    metaDescription:
      'Shoulder pain treatment in Rochester, NY for rotator cuff problems, impingement, and stiffness. Soft-tissue work, shockwave, adjustments, and rehab.',
    heading: 'Shoulder Pain Treatment in Rochester, NY',
    intro: [
      'Shoulder pain can make reaching overhead, sleeping on your side, lifting, or swinging a golf club difficult. Because the shoulder depends on the neck, upper back, and shoulder blade to move well, we evaluate all of them.',
    ],
    symptoms: [
      'Pain reaching overhead or behind your back',
      'Pain lying on the affected side',
      'Weakness lifting or carrying',
      'Clicking, catching, or stiffness',
    ],
    causes: [
      'Rotator cuff irritation or tendinopathy',
      'Impingement from poor shoulder-blade mechanics',
      'Upper back stiffness and posture',
      'Overuse from lifting, throwing, or racquet and club sports',
    ],
    approach: [
      'After identifying the involved structures, treatment may include IASTM and cupping for the muscles, shockwave therapy for stubborn tendon problems, adjustments to the shoulder, upper back, and neck, and progressive rotator cuff and shoulder-blade strengthening.',
    ],
    services: ['iastm', 'shockwave', 'cmt', 'exercise', 'bfrt'],
    redFlags: [
      'Inability to lift your arm after a fall or injury',
      'Shoulder pain with chest pain, shortness of breath, or sweating — call 911',
      'Visible deformity or severe swelling',
    ],
    faqs: [
      {
        question: 'Can a chiropractor treat shoulder pain?',
        answer:
          'Yes. Chiropractors treat the shoulder joint itself as well as the neck and upper back, which often contribute to shoulder problems.',
      },
    ],
    relatedPosts: ['iastm-graston-style-soft-tissue-work-rochester-ny', 'shockwave-therapy-how-it-works-what-to-expect'],
  },
  {
    slug: 'hip-knee-pain',
    name: 'Hip & Knee Pain',
    summary:
      'Joint pain in the hips and knees often stems from mechanics elsewhere in the body. We treat the whole kinetic chain so you can walk, run, and move with less pain.',
    metaTitle: 'Hip & Knee Pain Relief in Rochester, NY',
    metaDescription:
      'Hip and knee pain treatment in Rochester, NY, including arthritis-related pain. Joint mobilization, soft-tissue work, shockwave, BFRT, and strength rehab.',
    heading: 'Hip & Knee Pain Relief in Rochester, NY',
    intro: [
      'Hip and knee pain can come from the joint itself, the tendons and muscles around it, or the way the foot, knee, hip, and low back work together. We look at the whole chain, not just the spot that hurts.',
      'For people with hip or knee osteoarthritis, the right mix of strength, mobility, and load management can make a real difference in daily comfort and activity.',
    ],
    symptoms: [
      'Pain with stairs, squatting, or getting out of a chair',
      'Stiffness after rest or first thing in the morning',
      'Pain on the outside of the hip, especially lying on that side',
      'Pain around or under the kneecap',
    ],
    causes: [
      'Osteoarthritis',
      'Tendon irritation (gluteal, patellar, or IT band area)',
      'Weak hip and thigh muscles',
      'Foot and ankle mechanics',
      'A sudden increase in running, walking, or training',
    ],
    approach: [
      'Treatment may include joint mobilization and adjustments, soft-tissue work, shockwave therapy for tendon pain, and a progressive strengthening program.',
      'Blood flow restriction training is especially helpful when a painful joint will not tolerate heavy loads.',
    ],
    services: ['cmt', 'iastm', 'shockwave', 'bfrt', 'exercise'],
    redFlags: [
      'Inability to bear weight after a fall',
      'A hot, red, swollen joint, especially with fever',
      'Calf pain and swelling (possible blood clot)',
    ],
    faqs: [
      {
        question: 'Can chiropractic help arthritis in the hip or knee?',
        answer:
          "Chiropractic care can't reverse arthritis, but improving mobility, strength, and how you load the joint often reduces pain and helps you stay active.",
      },
    ],
    relatedPosts: ['blood-flow-restriction-training-rochester-ny', 'shockwave-therapy-chronic-pain-rochester'],
  },
  {
    slug: 'plantar-fasciitis',
    name: 'Plantar Fasciitis',
    summary:
      'Heel and arch pain from plantar fasciitis can sideline even the most active patients. Shockwave therapy, IASTM, and corrective exercise help get you back on your feet.',
    metaTitle: 'Plantar Fasciitis Treatment in Rochester, NY',
    metaDescription:
      'Plantar fasciitis and heel pain treatment in Rochester, NY. Shockwave therapy, IASTM, and targeted foot and calf exercise for stubborn heel pain.',
    heading: 'Plantar Fasciitis & Heel Pain Treatment in Rochester, NY',
    intro: [
      'Plantar fasciitis causes sharp heel or arch pain, often worst with the first steps in the morning or after sitting. It is common in runners, people who stand all day, and anyone who has recently increased walking or activity.',
      'Shockwave therapy is one of the better-studied options for heel pain that has not improved with stretching and rest, and we combine it with hands-on care and a targeted exercise plan.',
    ],
    symptoms: [
      'Sharp pain at the bottom of the heel',
      'Pain with the first steps in the morning',
      'Pain after long periods of standing or walking',
      'Tight calves or arch',
    ],
    causes: [
      'Sudden increases in walking, running, or standing',
      'Tight calf muscles and limited ankle motion',
      'Unsupportive footwear',
      'Foot mechanics',
    ],
    approach: [
      'Care may include shockwave therapy, IASTM for the calf and arch, ankle and foot adjustments, and a progressive calf and foot strengthening program. We also review footwear and activity load.',
    ],
    services: ['shockwave', 'iastm', 'exercise'],
    redFlags: [
      'Heel pain after a fall or jump',
      'Numbness or burning in the foot',
      'Significant swelling or redness',
    ],
    faqs: [
      {
        question: 'How many shockwave sessions does plantar fasciitis need?',
        answer:
          'A typical course is several sessions spaced about a week apart, but your plan depends on how long you have had symptoms and how you respond.',
      },
    ],
    relatedPosts: ['shockwave-therapy-how-it-works-what-to-expect', 'shockwave-therapy-chronic-pain-rochester'],
  },
]

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug)
}
