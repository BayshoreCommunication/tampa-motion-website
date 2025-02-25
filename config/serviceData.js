import { image } from "@nextui-org/theme";

export const serviceMenu = [
  {
    service: "Orthopedic",
    service_slug: "",
    image: "/assets/services/orthopedic.png",

    subClass: [
      // {
      //   service: "Physiotherapy",
      //   service_slug: "physiotherapy",
      // },
      {
        service: "Orthopedic / Joint Pain / Spine",
        service_slug: "Orthopedic-Joint-Pain-Spine",
      },
      {
        service: "Conservative (Non-Invasive Treatments)",
        service_slug: "Conservative-Non-Invasive-Treatments",
      },
      {
        service: "Pre-Surgical / Post-Surgical",
        service_slug: "Pre-Surgical-Post-Surgical",
      },
      // {
      //   service: "Joint Replacement Rehabilitation",
      //   service_slug: "Joint-Replacement-Rehabilitation",
      // },
      {
        service: "Sports-Related Injuries (Sprains / Strains / Fractures)",
        service_slug: "Sports-Related-Injuries-Sprains-Strains-Fractures",
      },
      {
        service: "Personal / Work Injury",
        service_slug: "Personal-Work-Injury",
      },
      // {
      //   service: "Rotator Cuff Surgery Preparation",
      //   service_slug: "Rotator-Cuff-Surgery-Preparation",
      // },
      // {
      //   service: "Spine and Cosmetic Surgery Rehabilitation",
      //   service_slug: "Spine-and-Cosmetic-Surgery-Rehabilitation",
      // },
      // {
      //   service: "Ligament and Tendon Repair Rehabilitation",
      //   service_slug: "Ligament-and-Tendon-Repair-Rehabilitation",
      // },
      // {
      //   service: "Upper and Lower Extremity Surgery Rehabilitation",
      //   service_slug: "Upper-and-Lower-Extremity-Surgery-Rehabilitation",
      // },
      {
        service: "Flexibility Lab (Passive Stretching)",
        service_slug: "FLEXIBILITY-LAB-PASSIVE-STRETCHING",
      },
      {
        service: "Core Lab (Strengthening / Functional Training)",
        service_slug: "CORE-LAB-STRENGTHENING-FUNCTIONAL-TRAINING",
      },
    ],
  },
  {
    service: "Neurological",
    service_slug: "",
    image: "/assets/services/neurological.png",
    subClass: [
      {
        service: "Neurological Rehab",
        service_slug: "neurological-rehabilitation",
      },
      { service: "Multiple Sclerosis", service_slug: "MULTIPLE-SCLEROSIS" },
      { service: "Lupus", service_slug: "Lupus" },
      { service: "Stroke (Cva/Tia)", service_slug: "STROKE-CVA-TIA" },
      { service: "Parkinson's Disease", service_slug: "PARKINSONS-DISEASE" },
      {
        service: "Ehlers Danlos Syndrome",
        service_slug: "EHLERS-DANLOS-SYNDROME",
      },
    ],
  },

  {
    service: "Surgery Related",
    service_slug: "",
    image: "/assets/services/surgery-related.png",
    subClass: [
      {
        service: "Pre- and Post-Operative Rehab",
        service_slug: "pre-and-post-operative-rehabilitation",
      },
      {
        service: "Rotator Cuff Surgery Preparation",
        service_slug: "Rotator-Cuff-Surgery-Preparation",
      },
      {
        service: "Spine and Cosmetic Surgery Rehabilitation",
        service_slug: "Spine-and-Cosmetic-Surgery-Rehabilitation",
      },
      {
        service: "Joint Replacement Rehabilitation",
        service_slug: "joint-replacement-rehabilitation",
      },
      {
        service: "Ligament and Tendon Repair Rehabilitation",
        service_slug: "Ligament-and-Tendon-Repair-Rehabilitation",
      },
      {
        service: "Upper and Lower Extremity Surgery Rehabilitation",
        service_slug: "Upper-and-Lower-Extremity-Surgery-Rehabilitation",
      },
      {
        service: "Cosmetic Surgery Rehab",
        service_slug: "Cosmetic-Surgery-Rehab",
      },
      {
        service: "Parkinson’s Disease Rehabilitation ",
        service_slug: "parkinsons-disease-rehabilitation",
      },
    ],
  },
  {
    service: "Manual Lymphatic Drainage",
    service_slug: "MANUAL-LYMPHATIC-DRAINAGE",
    image: "/assets/services/manual-lymphatic-drainage.png",
    subClass: [],
  },
  {
    service: "Pelvic Floor Strengthening",
    service_slug: "PELVIC-FLOOR-STRENGTHENING",
    image: "/assets/services/pelvic-floor-strengthening.png",
    subClass: [],
  },
  {
    service: "Balance Dysfunction / Vestibular",
    service_slug: "",
    image: "/assets/services/balance-dysfunction-vestibular.png",
    subClass: [
      {
        service: "Vestibular And Balance Therapy",
        service_slug: "VESTIBULAR-AND-BALANCE-THERAPY",
      },
      // { service: "Stroke (Cva/Tia)", service_slug: "STROKE-CVA-TIA" },
      // {
      //   service: "Parkinson’s Disease",
      //   service_slug: "PARKINSONS-DISEASE",
      // },
      // { service: "Multiple Sclerosis", service_slug: "MULTIPLE-SCLEROSIS" },
      // {
      //   service: "Sports-Related Injuries (Sprains / Strains / Fractures)",
      //   service_slug: "SPORTS-RELATED-INJURIES-SPRAINS-STRAINS-FRACTURES",
      // },
    ],
  },
  {
    service: "Community Outreach And Advisory Programs",
    service_slug: "",
    image: "/assets/services/community-outreach-and-advisory-programs.png",
    subClass: [
      {
        service: "Work Place Ergonomics and Mobility Workshops for Businesses",
        service_slug:
          "Work-place-ergonomics-and-mobility-workshops-for-businesses",
      },
      {
        service: "School Based Sports Training and Rehabilitation Programs",
        service_slug:
          "School-based-sports-training-and-rehabilitation-programs",
      },
    ],
  },
];
export const insuranceMenu = [
  {
    service: "Insurance",
    service_slug: "insurance",

    subClass: [],
  },
  {
    service: "Non Insurance",
    service_slug: "non-insurance",

    subClass: [],
  },
];

export const services = [
  // {
  //   service: "Physiotherapy",
  //   service_slug: "physiotherapy",
  //   text: `
  //  Physiotherapy is a specialized healthcare service focused on improving mobility, reducing pain, and restoring physical function through targeted therapeutic exercises, manual therapy, and advanced rehabilitation techniques.
  //  `,
  //   image: "/assets/services/Physiotherapy.png",
  //   alt: "Physiotherapy",
  //   slug: "physiotherapy",
  // },
  {
    service: "Joint Replacement Rehabilitation",
    service_slug: "joint-replacement-rehabilitation",
    text: `
   Joint replacement rehabilitation is a specialized program designed to aid recovery after procedures like hip, knee, or shoulder replacements. It focuses on restoring strength, flexibility, and function while reducing post-surgical pain.
   `,
    image: "/assets/services/joint_replacements.png",
    alt: "Joint replacements",
    slug: "joint-replacement-rehabilitation",
  },
  {
    service: "Neurological Rehabilitation",
    service_slug: "neurological-rehabilitation",
    text: `
   Neurological Rehabilitation is a specialized form of therapy designed to help individuals recover and adapt after conditions affecting the nervous system, such as strokes, brain injuries, or neurological disorders.
   `,
    image: "/assets/services/neurological_rehab.png",
    alt: "Neurological Rehab",
    slug: "neurological-rehabilitation",
  },
  {
    service: "Parkinson’s Disease Rehabilitation",
    service_slug: "parkinsons-disease-rehabilitation",
    text: `
   Parkinson’s disease rehabilitation is a specialized therapy designed to address the progressive challenges of Parkinson’s, such as tremors, rigidity, and difficulty with movement.`,
    image: "/assets/services/parkinson_disease.png",
    alt: "Parkinson's Disease",
    slug: "parkinsons-disease-rehabilitation",
  },
  {
    service: "Pre and Post-Operative Rehabilitation",
    service_slug: "pre-and-post-operative-rehabilitation",
    text: `
   Pre and post-operative rehabilitation is a program designed to prepare your body for surgery and facilitate a faster, more effective recovery afterward.
   `,
    image: "/assets/services/operative_rehab.png",
    alt: "Pre- and Post-Operative Rehab",
    slug: "pre-and-post-operative-rehabilitation",
  },
  {
    service: "Rotator Cuff Surgery Preparation",
    service_slug: "rotator-cuff-surgery-preparation",
    text: `Rotator cuff surgery preparation is a focused rehabilitation program designed to optimize shoulder strength, flexibility, and function before undergoing surgical repair.`,
    image: "/assets/services/cuff_surgery.png",
    alt: "Rotator Cuff Surgery Preparation",
    slug: "rotator-cuff-surgery-preparation",
  },
  {
    service: "Spine and Cosmetic Surgery Rehabilitation",
    service_slug: "spine-and-cosmetic-surgery-rehabilitation",
    text: `
   Rehabilitation for spine and cosmetic surgeries focuses on optimizing physical readiness before surgery and ensuring a safe, efficient recovery afterward.
   `,
    image: "/assets/services/surgeries.png",
    alt: "Spine and cosmetic surgeries",
    slug: "spine-and-cosmetic-surgery-rehabilitation",
  },
  {
    service: "Ligament and Tendon Repair Rehabilitation",
    service_slug: "ligament-and-tendon-repair-rehabilitation",
    text: `
   Rehabilitation for ligament and tendon repairs is a critical process that aids in restoring strength, stability, and range of motion following surgery or injury.
   `,
    image: "/assets/services/repairs.png",
    alt: "Ligament and tendon repairs",
    slug: "ligament-and-tendon-repair-rehabilitation",
  },
  {
    service: "Upper and Lower Extremity Surgery Rehabilitation",
    service_slug: "upper-and-lower-extremity-surgery-rehabilitation",
    text: `
   Rehabilitation for upper and lower extremity surgeries is an essential process that helps restore mobility, strength, and function following surgeries such as hip replacements, knee surgeries, shoulder surgeries, and more.
   `,
    image: "/assets/services/extremities_surgeries.png",
    alt: "Upper and lower extremities surgeries",
    slug: "upper-and-lower-extremity-surgery-rehabilitation",
  },
  // new items
  {
    service: "Conservative (Non-Invasive Treatments)",
    service_slug: "CONSERVATIVE-NON-INVASIVE-TREATMENTS",
    text: `Injuries to most joints and spine can leave you struggling with pain and limited movement. Whether from trauma, overuse, or degeneration, these conditions can disrupt your daily life. We are committed to helping you reclaim what’s been lost. With personalized care and advanced rehabilitation, we’ll help you move freely again and restore your quality of life.
`,
    image: "/assets/services/CONSERVATIVE-NON-INVASIVE-TREATMENTS.png",
    alt: "",
    slug: "CONSERVATIVE-NON-INVASIVE-TREATMENTS",
  },
  {
    service: "Orthopedic / Joint Pain / Spine",
    service_slug: "",
    text: `At Tampa Motion, our clinicians provide ONE-TO-ONE care.  All exercises and treatments are tailored for each patient. We believe in a hands-on, personalized approach. Patients of all ages – from children (aged 8 and above) to adults – receive custom care plans from our licensed Doctor of Physical Therapy (DPT), ensuring every session targets your unique goals.`,
    image: "/assets/services/ORTHOPEDIC-JOINT-PAIN-SPINE.png",
    alt: "",
    slug: "ORTHOPEDIC-JOINT-PAIN-SPINE",
  },
  {
    service: "PRE-SURGICAL  /  POST-SURGICAL",
    service_slug: "PRE-SURGICAL-POST-SURGICAL",
    text: `Tampa Motion offers comprehensive pre- and post-operative rehabilitation to ensure the best outcomes. It helps patients regain strength, flexibility, and function. Our rehab programs are designed to support patients through every step of their recovery, providing personalized care and expert guidance.  We are proud of ONE-TO-ONE patient care, avoiding multiple overlapping patients and avoiding ‘all-size-fits-all’ treatments.`,
    image: "/assets/services/PRE-SURGICAL-POST-SURGICAL.png",
    alt: "",
    slug: "PRE-SURGICAL-POST-SURGICAL",
  },
  {
    service: "Cosmetic Surgery Rehab",
    service_slug: "",
    text: `Cosmetic surgeries can significantly improve a patient's quality of life, whether by alleviating chronic pain, improving health or enhancing physical appearance. However, the success of these surgeries heavily relies on comprehensive pre- and post-operative rehabilitation. Proper rehab ensures optimal recovery, minimizes complications, and helps patients return to their daily activities with improved function and confidence.`,
    image: "/assets/services/COSMETIC-SURGERY-REHAB.png",
    alt: "",
    slug: "COSMETIC-SURGERY-REHAB",
  },
  {
    service: "Multiple Sclerosis",
    service_slug: "",
    text: `Multiple Sclerosis (MS) is a chronic neurological condition where the immune system mistakenly attacks the protective covering of nerves (myelin), causing communication issues between the brain and body. MS affects the central nervous system, leading to a variety of symptoms that can disrupt daily life with fatigue and mobility issues. When it is severe, some individuals may face cognitive difficulties such as difficulties in reading, writing, understanding, or making any decision.
`,
    image: "/assets/services/MULTIPLE-SCLEROSIS.png",
    alt: "",
    slug: "MULTIPLE-SCLEROSIS",
  },
  {
    service: "Lupus",
    service_slug: "",
    text: `Lupus, specifically systemic Lupus erythematosus (SLE), is a chronic autoimmune disease where the immune system attacks healthy tissues and organs unintentionally. It can affect the skin, joints, kidneys, heart, and nervous system. Symptoms vary widely but often include joint pain, fatigue, skin rashes, and neurological issues, making it challenging to manage without specialized care. Early diagnosis and ongoing care are essential, as complications like kidney damage and cardiovascular issues can occur.`,
    image: "/assets/services/Lupus.png",
    alt: "",
    slug: "Lupus",
  },
  {
    service: "Stroke (Cva/Tia)",
    service_slug: "",
    text: `A stroke,  a cerebrovascular accident (CVA), occurs when blood flow to the brain is interrupted, leading to potential brain damage and a range of physical issues such as paralysis, difficulty speaking, cognitive impairments, and more. Stroke rehabilitation is a specialized program designed to help individuals recover from a stroke. It is dedicated to helping stroke survivors regain physical and emotional strength, improving their quality of life.
`,
    image: "/assets/services/STROKE-CVA-TIA.png",
    alt: "",
    slug: "STROKE-CVA-TIA",
  },
  {
    service: "PARKINSON’S DISEASE",
    service_slug: "",
    text: `Parkinson’s Disease (PD) is a progressive neurological disorder that affects movement. It occurs when nerve cells in the brain that produce dopamine, a chemical that helps control movement, begin to break down. This leads to symptoms such as tremors, muscle stiffness, slowed movement (bradykinesia), and balance issues. Parkinson's disease rehabilitation is a specialized therapeutic approach designed to support individuals diagnosed with this neurological disorder.`,
    image: "/assets/services/PARKINSONS-DISEASE.png",
    alt: "",
    slug: "PARKINSONS-DISEASE",
  },
  {
    service: "Ehlers Danlos Syndrome",
    service_slug: "",
    text: `Ehlers-Danlos Syndrome (EDS) is a collection of genetic disorders that impact connective tissues, influencing the skin, joints, and the walls of blood vessels. People with EDS often have hypermobile joints, skin that bruises easily, and fragile tissues. Rehabilitation for EDS aims to help manage symptoms and improve quality of life. This is achieved through a combination of manual lymphatic massage, therapeutic exercises, education, and supportive treatments.
`,
    image: "/assets/services/EHLERS-DANLOS-SYNDROME.png",
    alt: "",
    slug: "EHLERS-DANLOS-SYNDROME",
  },
  {
    service: "Sports-Related Injuries (Sprains / Strains / Fractures)",
    service_slug: "",
    text: `Sports-related injuries, such as sprains, strains, and fractures, are common conditions that affect the musculoskeletal system. A sprain involves ligament damage, while a strain affects muscles or tendons. Fractures are breaks in the bone, often caused by high-impact sports or repetitive stress. These injuries can result in significant pain, reduced mobility, and a prolonged recovery process without proper treatment.`,
    image:
      "/assets/services/SPORTS-RELATED-INJURIES-SPRAINS-STRAINS-FRACTURES.png",
    alt: "",
    slug: "SPORTS-RELATED-INJURIES-SPRAINS-STRAINS-FRACTURES",
  },
  {
    service: "Manual Lymphatic Drainage",
    service_slug: "",
    text: `Do you struggle with swelling, discomfort, or slow recovery after surgery? We understand how these issues can impact your quality of life. Our Manual Lymphatic Drainage (MLD) service is specifically designed to help manage lymphedema and promote faster healing after surgeries. This gentle, non-invasive therapy focuses on stimulating the lymphatic system, improving circulation, and reducing swelling to support your body’s natural detoxification process.`,
    image: "/assets/services/MANUAL-LYMPHATIC-DRAINAGE.png",
    alt: "",
    slug: "MANUAL-LYMPHATIC-DRAINAGE",
  },
  {
    service: "Pelvic Floor Strengthening",
    service_slug: "",
    text: `The pelvic floor muscles hold the pelvic organ in their unique positions for optimal functions.  Hence, weakness of these muscles can directly affect the function of the bladder, intestines, urethra, rectum, vagina, cervix and prostate.
`,
    image: "/assets/services/PELVIC-FLOOR-STRENGTHENING.png",
    alt: "",
    slug: "PELVIC-FLOOR-STRENGTHENING",
  },
  {
    service: "Personal / Work Injury",
    service_slug: "",
    text: `Personal and  work injuries can severely harm your mobility and quality of life, including ability to work and provide for oneself. Work injuries, from repetitive strain or accidents, can cause chronic pain, stiffness, and limited movement.
`,
    image: "/assets/services/PERSONAL-WORK-INJURY.png",
    alt: "",
    slug: "PERSONAL-WORK-INJURY",
  },
  {
    service: "Flexibility Lab (Passive Stretching)",
    service_slug: "",
    text: `Do you often feel stiff, experience limited range of motion, or deal with aches that make daily tasks more challenging?  We understand that flexibility is more than just about movement—it's about living comfortably and confidently. Our Flexibility Lab focuses on passive stretching techniques tailored to your body’s needs, promoting better mobility, relaxation, and overall well-being.
`,
    image: "/assets/services/FLEXIBILITY-LAB-PASSIVE-STRETCHING.png",
    alt: "",
    slug: "FLEXIBILITY-LAB-PASSIVE-STRETCHING",
  },
  {
    service: "CORE LAB (STRENGTHENING / FUNCTIONAL TRAINING)",
    service_slug: "",
    text: `Do you often struggle with low energy, poor posture, or discomfort during physical activity? We understand that core strength is more than just about looking toned—it's about building a stable foundation for your body to function at its best. Our Core Lab focuses on strengthening the muscles that support your spine, pelvis, and abdomen, improving balance, posture, and overall strength needed for daily activities and higher-level work and sports related functions.
`,
    image: "/assets/services/CORE-LAB-STRENGTHENING-FUNCTIONAL-TRAINING.png",
    alt: "",
    slug: "CORE-LAB-STRENGTHENING-FUNCTIONAL-TRAINING",
  },
  {
    service: "Vestibular And Balance Therapy",
    service_slug: "",
    text: `Do you experience dizziness, vertigo, or challenges with balance that disrupt your daily life? We understand how these issues can affect your overall well-being. Our Vestibular and Balance Therapy program is specifically designed to address inner ear disorders and neurological conditions that impact your body’s stability. `,
    image: "/assets/services/VESTIBULAR-AND-BALANCE-THERAPY.png",
    alt: "",
    slug: "VESTIBULAR-AND-BALANCE-THERAPY",
  },
  {
    service: "School Based Sports Training and Rehabilitation Programs",
    service_slug: "",
    text: `Are you a student-athlete looking to enhance your performance or recover from an injury? We understand that participating in school sports is not just about competition—it’s about building strength, endurance, and resilience while staying healthy. Our School-Based Sports Training and Rehabilitation Programs are designed to help athletes at every level stay in top shape and safely recover when needed.`,
    image:
      "/assets/services/School-based-sports-training-and-rehabilitation-programs.png",
    alt: "",
    slug: "School-based-sports-training-and-rehabilitation-programs",
  },
  {
    service: "Work Place Ergonomics and Mobility Workshops for Businesses",
    service_slug: "",
    text: `Are your employees dealing with discomfort, fatigue, or injuries from poor posture or repetitive movements? Workplace wellness goes beyond just having the right tools. It’s about creating an environment where employees feel comfortable and can perform at their best. `,
    image:
      "/assets/services/Work-place-ergonomics-and-mobility-workshops-for-businesses.png",
    alt: "",
    slug: "Work-place-ergonomics-and-mobility-workshops-for-businesses",
  },
];

//slug structure------------------------------
const slugStructure = {
  title: ``,
  url: ``,
  slug: ``,
  icon: ``,
  sortTitle: ``,
  heroDescription: ``,
  shortDescription: ``,
  description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
};
//-----------------------

export const servicesSlug = [
  //   {
  //     title: "Physiotherapy",
  //     url: "",
  //     slug: "physiotherapy",
  //     icon: "",
  //     sortTitle: "",
  //     heroDescription: `Recover faster with expert physiotherapy that boosts strength, flexibility, and mobility through focused treatments.`,
  //     shortDescription: ``,
  //     description: `
  //     <div class="h-fit ">
  //       <div class=" md:space-x-6">
  //         <div>
  //             <p class="text-gray-700 mb-4 leading-relaxed">

  // Physiotherapy is a specialized healthcare service focused on improving mobility, reducing pain, and restoring physical function through targeted therapeutic exercises, manual therapy, and advanced rehabilitation techniques.
  //             </p>
  //         </div>
  //         <div>
  //           <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">

  // Who Can Benefit from This Service?
  //           </h2>
  //           <p class="text-gray-700 mb-4 leading-relaxed">

  // Physiotherapy is ideal for individuals of all ages dealing with a wide range of physical challenges, including:
  //           </p>
  //           <ul className="list-disc pl-8 ml-10 to-emerald-500 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
  //             <li>
  //               <span class="font-bold text-gray-900 pr-1">
  //   Chronic Pain:
  //               </span>
  //  Persistent back, neck, shoulder, or joint pain due to conditions like arthritis or fibromyalgia.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">
  //   Injuries:
  //               </span>
  //  Sports injuries, workplace injuries, or accidents causing muscle strain, ligament tears, or fractures.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">
  //   Post-Surgery Recovery:
  //               </span>
  //  Rehabilitation after orthopedic surgeries such as joint replacements or spinal procedures.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">
  //   Neurological Conditions:
  //               </span>
  //  Issues like stroke, Multiple Sclerosis, or Parkinson's disease affecting balance and coordination.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">
  //   Movement Disorders:
  //               </span>
  //  Difficulty in walking, climbing stairs, or performing daily activities due to aging or illness.
  //             </li>
  //           </ul>
  //         </div>
  //         <div>
  //           <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">

  // How Tampa Motion Kinetics Helps You Heal and Move Forward
  //           </h2>
  //           <p className="text-gray-700 mb-4 leading-relaxed">

  // Tampa Motion Kinetics PLLC addresses your physical challenges with a comprehensive and  customized approach:
  //           </p>
  //           <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2 ">
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">

  //               </span>
  // Our experienced physiotherapists conduct detailed evaluations to identify the root cause of your pain or movement issues.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">

  //               </span>
  // We employ modern treatment methods, including dry needling, cupping therapy, and electrotherapy, alongside traditional techniques to ensure optimal results.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">

  //               </span>
  // Each session focuses on your unique goals, providing hands-on therapy and tailored exercise regimens for faster recovery.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">

  //               </span>
  // Our clinic features advanced rehabilitation equipment, allowing us to treat a wide range of conditions effectively.
  //             </li>
  //             <li>
  //               <span className="font-semibold text-gray-900 pr-1">

  //               </span>
  // Beyond physical therapy, we guide lifestyle adjustments, ergonomic improvements, and preventative strategies to maintain long-term health and mobility.
  //             </li>

  //           </ul>
  //         </div>
  //         <p className="text-gray-700 mb-4 leading-relaxed">

  // Tampa Motion Kinetics PLLC is your trusted partner in overcoming physical challenges and rediscovering the freedom to move pain-free. Reach out today and take the first step toward a healthier, more active life.
  //         </p>
  //       </div>
  //     </div>`,
  //   },
  {
    title: "Joint Replacement Rehabilitation",
    url: "",
    slug: "joint-replacement-rehabilitation",
    icon: "",
    sortTitle:
      "Best joint replacement rehabilitation centers florida | Specialized Joint Rehabilitation Florida | Best Clinic for rehabilitation florida | total joint replacement rehabilitation specialist near me",

    heroDescription: `Rebuild strength and confidence post-surgery with personalized rehabilitation plans for smooth, pain-free recovery.`,
    shortDescription: `Looking for the best joint replacement rehabilitation centers in Florida? Our specialized joint rehabilitation in Florida provides expert care. Visit the best clinic for rehabilitation in Florida with a total joint replacement rehabilitation specialist near you.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Joint replacement rehabilitation is a specialized program designed to aid recovery after procedures like hip, knee, or shoulder replacements. It focuses on restoring strength, flexibility, and function while reducing post-surgical pain.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service is designed for individuals who have undergone joint replacement surgery and are seeking a safe and effective recovery process. Common candidates include:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Post-Surgery Patients:                         
              </span>   Those recovering from hip, knee, or shoulder replacement surgery.         
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
        Individuals with Mobility Issues:                  
              </span>
 Those struggling with stiffness, swelling, or pain after surgery, affecting their ability to walk, climb stairs, or perform daily tasks.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Patients Concerned About Reintegration:                        
              </span>           
 Individuals who need guidance to return to work, sports, or other activities following joint replacement.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
Our joint replacement rehabilitation program is designed to address the unique challenges of post-surgical recovery:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We develop phase-specific rehabilitation plans aligned with your surgeon’s recommendations, focusing on pain management, mobility, and gradual strengthening.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Techniques like hydrotherapy, ultrasound therapy, and gait training ensure effective healing and minimize complications such as stiffness or scar tissue formation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
From regaining the ability to walk independently to restoring complex movements, we prioritize outcomes that matter most to you.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our therapists continuously monitor your progress, adjusting your program as needed to ensure consistent improvement.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We provide at-home exercise plans, ergonomic advice, and post-rehabilitation wellness strategies to help you sustain your recovery long after therapy ends.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC is dedicated to supporting you through every step of your post-joint replacement journey, ensuring you regain confidence in your movement and quality of life. Let us help you move forward, stronger and better than ever.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Neurological Rehabilitation",
    url: "",
    slug: "neurological-rehabilitation",
    icon: "",
    sortTitle:
      "Neuro rehabilitation therapists Florida | best neurological rehabilitation centers Tampa | advanced neurologic rehabilitation florida | best neuro rehabilitation programs florida ",

    heroDescription: `Regain motor function and independence with our specialized therapies for conditions like stroke and nerve injuries.`,
    shortDescription: `Recover with expert care from top neuro rehabilitation therapists in Florida. Our best neurological rehabilitation centers in Tampa offer advanced neurologic rehabilitation in Florida with the best neuro rehabilitation programs for optimal recovery.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Neurological Rehabilitation is a specialized form of therapy designed to help individuals recover and adapt after conditions affecting the nervous system, such as strokes, brain injuries, or neurological disorders.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
Neurological Rehab is for individuals facing challenges resulting from:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Stroke:                        
              </span>           
 Difficulty with movement, speech, or coordination due to brain damage.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Traumatic Brain Injury (TBI):                         
              </span>
 Impaired cognitive and physical functions requiring targeted rehabilitation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Neurological Disorders:                        
              </span>           
 Conditions like Multiple Sclerosis or ALS that impact mobility and daily activities.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Spinal Cord Injuries:                        
              </span>
 Reduced motor control or paralysis, affecting quality of life.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Chronic Neurological Pain:                        
              </span>           
 Discomfort caused by nerve damage or miscommunication within the nervous system.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We recognize the complexities of neurological conditions and address them with an innovative approach:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We develop therapy programs tailored to your condition and goals, focusing on areas like motor function, coordination, and balance.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Our treatments include neuroplasticity-based exercises, robotic-assisted therapies, and sensory integration techniques to help rewire the brain and nervous system.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We emphasize fall prevention and safe mobility through advanced balance exercises and functional movement training.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Using virtual reality systems, electrical stimulation, and motion analysis, we enhance recovery outcomes and help patients track progress.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We involve family and caregivers in therapy, ensuring patients have the necessary support and guidance at home.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>

Neurological recovery often involves emotional challenges, so we collaborate with mental health professionals to support overall well-being.

            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC provides a nurturing environment to help patients overcome neurological challenges, regain control, and improve their quality of life. With our expertise and innovative care, we’re here to empower you on your way to recovery.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Parkinson’s Disease Rehabilitation",
    url: "",
    slug: "parkinsons-disease-rehabilitation",
    icon: "",
    sortTitle:
      "Best parkinson disease rehabilitation​ florida | Expert physical therapy for parkinson disease | specialized rehabilitation center for parkin's disease florida | best parkinson's disease treatments florida",

    heroDescription: `Enhance your movement, balance, and overall quality of life with therapies that help slow disease progression and improve daily activities.`,
    shortDescription: `Get the best Parkinson’s disease rehabilitation in Florida with expert physical therapy for Parkinson’s disease. Our specialized rehabilitation center for Parkinson’s disease in Florida offers the best Parkinson’s disease treatments for improved mobility and quality of life.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Parkinson’s disease rehabilitation is a specialized therapy designed to address the progressive challenges of Parkinson’s, such as tremors, rigidity, and difficulty with movement.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service is for individuals diagnosed with Parkinson’s disease who face:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Movement Challenges:                         
              </span>           
 Stiffness, slowness, and tremors impacting daily activities like walking, dressing, or eating.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Balance and Coordination Issues:                        
              </span>
 Increased risk of falls or difficulty navigating uneven surfaces.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Speech and Swallowing Difficulties:                        
              </span>           
 Muscle weakness affecting communication and swallowing.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Fatigue and Muscle Weakness:                        
              </span>
 Reduced energy levels or endurance for routine tasks.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Emotional and Cognitive Struggles:                        
              </span>           
 Anxiety, depression, or mild cognitive impairments often accompany Parkinson’s.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We offer to help individuals manage Parkinson’s disease and maintain a higher quality of life:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Our therapists use techniques like amplitude-focused therapy (e.g., LSVT BIG) to improve large, purposeful movements, addressing slowness and stiffness.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We focus on exercises that improve walking patterns, enhance posture, and reduce the risk of falls through real-world simulations.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Using sensory stimulation and coordination exercises, we help patients gain better control over involuntary movements.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Incorporating tools like visual cues, auditory feedback, and rhythmic training to optimize movement and coordination.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Collaboration with speech therapists ensures patients receive integrated care for communication and swallowing difficulties.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We regularly reassess your needs and adjust your rehabilitation plan as the condition evolves, ensuring the therapy stays effective at every stage.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
We walk this journey with you, offering genuine care, refined expertise, and an unwavering belief in your strength. Parkinson’s may influence your days, but it does not dictate them. That privilege belongs to you.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Pre and Post-Operative Rehabilitation",
    url: "",
    slug: "pre-and-post-operative-rehabilitation",
    icon: "",
    sortTitle:
      "Top Post-surgical rehabilitation programs florida | Best pre and post operative rehabilitation clinic florida | best pre-operativel rehab therapy solution| top post operative physical therapy",

    heroDescription: `Prepare for surgery and heal effectively afterward with structured rehab programs that fasten recovery.`,
    shortDescription: `Recover faster with top post-surgical rehabilitation programs in Florida. Our best pre- and post-operative rehabilitation clinic in Florida offers the best pre-operative rehab therapy solutions and top post-operative physical therapy for optimal healing.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Pre and post-operative rehabilitation is a program designed to prepare your body for surgery and facilitate a faster, more effective recovery afterward. 
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service benefits individuals undergoing or recovering from surgeries such as:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Orthopedic Procedures:                       
              </span>           
 Joint replacements, ligament repairs, or spine surgeries.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Cardiac Surgeries:                        
              </span>
 Bypass surgeries or valve replacements requiring gradual physical reintegration.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Abdominal or Pelvic Surgeries:                        
              </span>           
 Procedures where core strength and mobility are critical to recovery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Sports Injuries:                        
              </span>
 Surgeries for ACL tears, rotator cuff repairs, or similar conditions requiring rehabilitation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Minimizing Complications:                        
              </span>           
 Individuals who want to reduce risks like scar tissue, stiffness, or muscle weakness post-surgery.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We bridge the gap between surgery and full recovery with a strategic and individualized approach:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Before surgery, we focus on strengthening the muscles and joints, improving mobility, and boosting endurance to prepare your body for the surgical stress and recovery process.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We customize therapy to your procedure, targeting pain relief, swelling reduction, and the restoration of strength and flexibility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Advanced manual therapy techniques and modalities like myofascial release help reduce scar tissue buildup, improving mobility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We design progressive treatment plans that help you regain confidence and safely return to daily activities, sports, or work.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Using advanced methods like cryotherapy, compression therapy, and ultrasound, we focus on managing inflammation and promoting faster healing.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our therapists closely collaborate with your surgical team and adjust plans as necessary to align with your recovery milestones.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
We understand that every surgery and recovery process is unique. Our goal is to help you move through this phase with ease, confidence, and the assurance that your health and mobility are in expert hands.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Rotator Cuff Surgery Preparation",
    url: "",
    slug: "rotator-cuff-surgery-preparation",
    icon: "",
    sortTitle:
      "Expert preparation for rotator cuff surgery​ florida | best exercises to prepare for rotator cuff surgery florida | advanced preparation for rotator cuff surgery tampa | specializing in rotator cuff injuries florida ",

    heroDescription: `Get your shoulder ready before surgery and bounce back faster afterward with personalized rehab from our experts.`,
    shortDescription: `Get expert preparation for rotator cuff surgery in Florida. Learn the best exercises to prepare for rotator cuff surgery in Florida with advanced preparation in Tampa. Our clinic specializes in rotator cuff injuries in Florida for optimal recovery.`,
    description: ` 
    <div>
      <div classname="  md:space-x-6">
        <div>
            <p classname="text-gray-700 mb-4 leading-relaxed">
                      
Rotator cuff surgery preparation is a focused rehabilitation program designed to optimize shoulder strength, flexibility, and function before undergoing surgical repair.
            </p>
        </div>         
        <div>
          <h2 classname="text-xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who can benefit from this service?
          </h2>
          <p classname="text-gray-700 mb-4 leading-relaxed">
                      
This service is ideal for individuals planning rotator cuff surgery who are facing:
          </p>
          <ul classname="list-disc list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
 Shoulder Weakness or Pain:                         
              </span>           
 Persistent discomfort and reduced strength in the shoulder joint.
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
 Limited Range of Motion:                        
              </span>
 Difficulty lifting, reaching, or performing overhead activities due to stiffness or pain.
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
  Tissue Degeneration:                        
              </span>           
 Patients with chronic rotator cuff tears who want to improve the surrounding muscle condition before surgery.
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
  Concerns About Post-Surgical Recovery:                        
              </span>
 Individuals seeking to improve their chances of a faster and more effective rehabilitation after surgery.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We provide a systematic, evidence-based approach to ensure your shoulder is prepared for surgery:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We focus on strengthening the muscles around the rotator cuff, including the deltoid and scapular stabilizers, to enhance overall joint stability.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Through targeted stretches and manual therapy, we address stiffness, ensuring the shoulder can move freely and align properly for surgical correction.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Techniques such as heat therapy, therapeutic ultrasound, and anti-inflammatory exercises reduce discomfort and prepare the shoulder for surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Poor posture often exacerbates shoulder issues, so we incorporate training to optimize alignment and movement mechanics before surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We provide guidance on post-operative expectations, precautions, and early recovery exercises to mentally and physically prepare you for the rehabilitation process.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our therapists work closely with your surgical team to ensure the pre-surgical program aligns seamlessly with your surgical goals and post-operative care plan.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC is committed to preparing you for rotator cuff surgery with confidence, strength, and peace of mind. Our personalized care ensures your shoulder is in the best possible condition, setting you up for a faster, more successful recovery.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Spine and Cosmetic Surgery Rehabilitation",
    url: "",
    slug: "spine-and-cosmetic-surgery-rehabilitation",
    icon: "",
    sortTitle:
      "Expert physical therapy in spine health | best spine therapy center florida | advanced therapy for cosmetic surgery | Expert florida physical therapy for cosmetic surgery​​",

    heroDescription: `Ensure a smooth recovery and long-term stability with personalized therapy designed for spinal and cosmetic surgical procedures.`,
    shortDescription: `Improve mobility with expert physical therapy in spine health. Visit the best spine therapy center in Florida for advanced therapy for cosmetic surgery. Get expert Florida physical therapy for cosmetic surgery recovery and rehabilitation.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Rehabilitation for spine and cosmetic surgeries focuses on optimizing physical readiness before surgery and ensuring a safe, efficient recovery afterward.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service benefits individuals undergoing:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Spine Surgeries:                         
              </span>           
 Procedures such as spinal fusion, laminectomy, or herniated disc repair.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Cosmetic Surgeries:                        
              </span>
 Including abdominoplasty (tummy tuck), liposuction, breast augmentation or reduction, and facelifts.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Pre-Surgical Optimization Needs:                        
              </span>           
 Those seeking to build strength and flexibility for better surgical outcomes.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Post-Surgical Recovery Challenges:                        
              </span>
 Patients managing pain, limited mobility, or swelling after surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Posture and Functional Improvement:                        
              </span>           
 Individuals requiring posture correction or functional rehabilitation for a smoother transition back to daily life.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We approach spine and cosmetic surgery rehabilitation with precision and care, tailored to your unique needs:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
For spine surgeries, we enhance core and spinal muscle strength to stabilize and protect the spine. For cosmetic procedures, we ensure your muscles and tissues are healthy and flexible, reducing recovery risks.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Post-surgery, we use techniques like Manual Lymphatic Drainage, compression therapy, and therapeutic exercises to minimize discomfort and promote healing.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Spine surgery patients benefit from specialized exercises to improve spinal alignment and reduce strain, while cosmetic surgery patients receive guidance on postural adaptations for better results.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Advanced manual therapy helps reduce scar adhesions, improving mobility and aesthetic outcomes.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We create step-by-step plans for rebuilding strength, endurance, and flexibility, allowing you to return to daily activities and physical fitness with confidence.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our team combines relaxation techniques, mindfulness practices, and nutrition guidance to support healing and overall well-being.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC combines expertise, innovation, and compassion to ensure your journey through spine or cosmetic surgery is as smooth as possible. We are here to help you regain function, feel confident, and embrace life with renewed vitality.
        </p>
      </div>
    </div>`,
  },
  {
    title: "Ligament and Tendon Repair Rehabilitation",
    url: "",
    slug: "ligament-and-tendon-repair-rehabilitation",
    icon: "",
    sortTitle:
      "Best tendon repair post-op rehabilitation florida | best local physical therapist for repair ligaments and tendons | best physical therapy for ligament and tendon healing florida | best physical therapy for ligament injuries",

    heroDescription: `Rebuild strength and prevent future injuries with rehab focused to help you recover from ligament and tendon injuries.`,
    shortDescription: `Recover faster with the best tendon repair post-op rehabilitation in Florida. Find the best local physical therapist for repairing ligaments and tendons. Get the best physical therapy for ligament and tendon healing in Florida, specializing in ligament injury recovery.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Rehabilitation for ligament and tendon repairs is a critical process that aids in restoring strength, stability, and range of motion following surgery or injury.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service is for individuals recovering from:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Ligament Repairs:                         
              </span>           
 Including ACL, MCL, or PCL tears, as well as ankle and shoulder ligament reconstructions.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Tendon Repairs:                        
              </span>
 Such as rotator cuff tears, Achilles tendon repairs, or tendon injuries in the elbow, wrist, or knee.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Post-Surgical Rehabilitation Needs:                        
              </span>           
 Patients who require targeted therapy after surgery to restore strength, flexibility, and mobility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Chronic Tendon and Ligament Injuries:                        
              </span>
 Individuals with long-standing injuries needing rehabilitation after repair to restore full function.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Athletes and Active Individuals:                        
              </span>            Those who seek to return to sports or physically demanding activities post-repair.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We focus on delivering precise care to ensure a fast and safe recovery from ligament and tendon repairs:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
After surgery or injury, we use gentle range-of-motion exercises and manual therapy to reduce swelling, manage pain, and promote tissue healing while preventing stiffness.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We target the muscles around the repaired ligament or tendon to restore strength, improve function, and promote long term stability.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Gradually increasing the load on the injured area to mimic real-life activities and return to sports or work with confidence.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We apply advanced techniques such as deep tissue massage, myofascial release, and ultrasound therapy to reduce scar tissue formation and improve mobility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Once full recovery is achieved, we provide education on how to prevent re-injury through proper movement patterns, strength maintenance, and injury avoidance techniques.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our team incorporates lifestyle modifications, including nutrition counseling and mindfulness practices.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC is committed to guiding you through every phase of ligament and tendon repair recovery, ensuring that you regain strength, functionality, and mobility with expert care and personal attention at every step.
        </p>
      </div>
    </div>`,
  },

  {
    title: "Upper and Lower Extremity Surgery Rehabilitation",
    url: "",
    slug: "upper-and-lower-extremity-surgery-rehabilitation",
    icon: "",
    sortTitle:
      "Best upper extremity surgical rehabilitation center | experts in lower extremity physical therapy | best physician services for Upper and Lower Extremity Surgery | best care for upper and lower extremity surgical rehabilitation",

    heroDescription: `Regain movement and function in your arms and legs with structured rehab customized to your surgical needs.`,
    shortDescription: `Get expert care at the best upper extremity surgical rehabilitation center. Our specialists provide advanced lower extremity physical therapy and the best physician services for upper and lower extremity surgery. Experience the best care for upper and lower extremity surgical rehabilitation.`,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Rehabilitation for upper and lower extremity surgeries is an essential process that helps restore mobility, strength, and function following surgeries such as hip replacements, knee surgeries, shoulder surgeries, and more.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Who Can Benefit from This Service?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This service is for individuals recovering from surgeries of the upper and lower extremities, including:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
 Upper Extremity Surgeries:                         
              </span>           
 Shoulder replacements, rotator cuff repairs, elbow surgeries, and wrist or hand surgeries.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Lower Extremity Surgeries:                       
              </span>
 Hip replacements, knee replacements, ACL repairs, ankle surgeries, and foot surgeries.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Post-Surgical Recovery Needs:                        
              </span>           
 Those who require assistance regaining strength, mobility, and function after upper or lower extremity surgeries.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Mobility Challenges:                        
              </span>
 Individuals struggling with walking, reaching, or grasping after surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
  Athletes and Active Individuals:                        
              </span>           
 People wanting to return to sports or physical activity post-surgery.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How Tampa Motion Kinetics Helps You Heal and Move Forward
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
We offer a personalized and systematic approach to rehabilitation, ensuring you achieve optimal results after upper and lower extremity surgeries:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
For individuals undergoing surgery, we design pre-operative rehabilitation programs to improve strength and flexibility, preparing the body for the stress of surgery and aiding in faster recovery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Immediately following surgery, we focus on reducing pain and swelling through specialized therapies and exercises designed to restore range of motion and functionality.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Our rehabilitation programs strengthen the muscles surrounding the surgical site, ensuring joint stability and improved performance.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We use a combination of modalities such as ice, heat therapy, electrical stimulation, and therapeutic ultrasound to help control pain and speed up the healing process.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Gradual progression of weight-bearing exercises and functional training helps you regain the ability to perform everyday tasks like walking, dressing, and carrying objects.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
For athletes or highly active individuals, we integrate sport-specific training to facilitate a safe return to physical activity and prevent re-injury.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
Tampa Motion Kinetics PLLC is dedicated to ensuring that your recovery from upper and lower extremity surgeries is as efficient and effective as possible. With expert care and personalized treatment plans, we are committed to helping you return to an active, pain free lifestyle.
        </p>
      </div>
    </div>`,
  },
  {
    title: `Conservative (Non-Invasive Treatments)`,
    url: ``,
    slug: `CONSERVATIVE-NON-INVASIVE-TREATMENTS`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                   Injuries to most joints and spine can leave you struggling with pain and limited movement. Whether from trauma, overuse, or degeneration, these conditions can disrupt your daily life. We are committed to helping you reclaim what’s been lost. With personalized care and advanced rehabilitation, we’ll help you move freely again and restore your quality of life.   
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Who is Affected the Most?      
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                Young adults and athletes (both genders):          
              </span> Active individuals are more prone to traumatic injuries like sprains, fractures, and ligament tears, especially in the knees, shoulders, and hands.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                    Middle-aged adults (both genders):      
              </span>Overuse injuries such as tendonitis and bursitis are common due to repetitive movements, often related to work or exercise.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          Older adults (More common in women):
              </span>           
Conditions like osteoarthritis and spinal stenosis become more prevalent, particularly in women, leading to joint and spine issues that affect mobility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                 Men (More likely in middle-aged and older adults):         
              </span>Tend to suffer from work-related injuries and trauma, such as herniated discs and fractures, often impacting the spine and upper extremities.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Common Conditions Patients Face:        
          </h2>
                   <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                    Joint injuries:      
              </span>    Swelling, pain, and loss of function, particularly in the knees, hips, and shoulders.       
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                   Spinal injuries:       
              </span>Chronic back pain, herniated discs, and nerve compression that cause tingling or weakness in the limbs.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                     Hand and elbow injuries:     
              </span>     Carpal tunnel syndrome, tennis elbow, and fractures that limit movement and grip strength.      
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                     Knee injuries:     
              </span>ACL tears, meniscus injuries, and knee osteoarthritis cause pain, instability, and difficulty bearing weight.
            </li>
            
          </ul>
        </div><div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
             How Tampa Motion  Can Help in the Recovery Process:         
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
Our team offers personalized physical therapy programs designed to reduce swelling, improve joint mobility, and alleviate pain. We also use advanced techniques, such as ULTRASOUND therapy, LASER therapy, Iontophoresis, KINESIOTAPING and manual mobilizations, FASCIAL RELEASE, TRACTION to support the healing process and help you regain function.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our specialists focus on spinal alignment, core strengthening, and posture correction to relieve pressure on nerves and improve overall back health.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>  We use a combination of therapeutic exercises, bracing, and targeted manual therapy to restore strength and range of motion. Our approach emphasizes gradual recovery while minimizing discomfort, helping you return to your daily activities with confidence.         
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We develop customized rehabilitation plans that focus on strengthening the muscles around your knee, improving joint stability, and reducing inflammation.
            </li>
            </ul>
</div>

        
      </div>
    </div>`,
  },
  {
    title: `Orthopedic/ Joint Pain / Spine`,
    url: ``,
    slug: `ORTHOPEDIC-JOINT-PAIN-SPINE`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
At Tampa Motion, our clinicians provide ONE-TO-ONE care.  All exercises and treatments are tailored for each patient. We believe in a hands-on, personalized approach. Patients of all ages – from children (aged 8 and above) to adults – receive custom care plans from our licensed Doctor of Physical Therapy (DPT), ensuring every session targets your unique goals.
            </p>
        </div> <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Athena Akram, DPT, the CEO and Senior Physical Therapist of Tampa Motion has extensive experience with treating patients with acute and chronic cervical, thoracic, and low back pain caused by degenerative disc and joint disease, scoliosis, Bertolotti’s syndrome and other debilitating diseases. She also has 10+ years of experience in treatment rehabilitation for many types of surgeries and conditions, such as:
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Orthopedic conditions treated at Tampa Motion:      
          </h2>
                    <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>  Arthritis - hand, wrist, elbow, shoulder, hip, knee, ankle, foot, pelvis          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Diabetic Neuropathy
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Peripheral Neuropathy          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Plantar Fasciitis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Spinal Neuropathy          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Sprains
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Strains          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Tennis Elbow
            </li><li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Tendonitis and Tendinosis
            </li><li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>TMJ Dysfunction
            </li>


          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
 Spine-Related Rehab is available for:
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Ankylosing Spondylitis          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Bertolotti’s Syndrome
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Disc herniation           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Ehler’s Danlos Syndrome
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Facet arthritis          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Low back pain
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Neck pain and Low back pain          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Neuropathy
            </li>           <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Pelvic Floor weakness
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Rheumatoid Arthritis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Ribs and thoracic spine pain
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Scoliosis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>SI joint pain and dysfunctions
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Spinal fusion, laminectomy, discectomy and disc replacement
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Spondylolisthesis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Spondylosis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Spinal Stenosis
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Whiplash
            </li>

          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 underline">
                 Treatments offered for Orthopedic Rehabilitation:     
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                Education and Counseling:          
              </span>  We provide guidance on what to expect before, during, and after surgery. Instructions on home safety and assistive devices.         
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                Pain Management Techniques:          
              </span>We use physical therapy modalities to reduce pain pre-surgery. Examples include Traction / Decompression, heat, cold, Infra-Red, Ultrasound, Phonophoresis, Electrical Stimulation, Kinesio taping, Instrument-Assisted and Manual Soft tissue mobilization.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Activity Specific Return to Work and Sports program:           
              </span> Customized exercises to help patients return to work, sports, or daily routines safely.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Balance and Gait Training:           
              </span>We teach the proper use of walkers or crutches to ensure safe movement post-surgery. We ensure stability improvements and retrain walking patterns. Additionally, we aim to reduce the risk of falls.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Breathing Training and Circulation Treatments:           
              </span>We aim to improve lung function and reduce the risk of post-surgery blood clots. We also offer Manual Lymphatic Drainage for optimal results of all surgeries.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Functional Movement Training:           
              </span>We prepare the shoulder for daily activities, improving mobility and reducing stiffness.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Manual Lymphatic Drainage:           
              </span>A specialized form of massage technique to direct proper lymph flow for post-surgical patients.  This technique significantly reduces swelling and healing time, increases muscle and joint function and reduces pain.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Manual Therapy:           
              </span>Hands-on techniques to reduce scar tissue, joint mobilization, Kinesio taping and lymphatic drainage and improve range of motion.
            </li>    
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Monitoring and Progress Tracking:           
              </span>Regular assessments to adjust the program based on recovery progress.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Posture and Core Stability Work:           
              </span>Enhances overall stability to prevent compensatory movements that could strain the spinal ligaments and muscles.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Progressive Strengthening Exercises:           
              </span>We prepare muscles around the joint for surgery. Our primary focus is on improving flexibility and joint mobility. 
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Pre-Surgical / Post-Surgical`,
    url: ``,
    slug: `PRE-SURGICAL-POST-SURGICAL`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
               Tampa Motion offers comprehensive pre- and post-operative rehabilitation to ensure the best outcomes. It helps patients regain strength, flexibility, and function. Our rehab programs are designed to support patients through every step of their recovery, providing personalized care and expert guidance.  We are proud of ONE-TO-ONE patient care, avoiding multiple overlapping patients and avoiding ‘all-size-fits-all’ treatments.       
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Common Issues that occur WITHOUT Pre- and Post-Operative Rehab           
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Delayed Recovery:           
              </span>Without rehab, the recovery process can be significantly slower.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Reduced Mobility and Range of Motion:            
              </span>Rehabilitation helps restore joint movement, and without it, patients may experience stiffness and limited motion.
            </li>
            
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Increased Pain and Discomfort:            
              </span>Proper rehab can help manage and reduce pain post-surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Higher Risk of Complications:           
              </span>Lack of rehab can increase the risk of complications such as blood clots, infections, excessive scar tissue formation, poor healing and issues with the prosthesis.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Muscle Weakness and Atrophy:            
              </span>Without exercises to strengthen muscles, patients may experience muscle weakness and atrophy.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Decreased Overall Function:            
              </span>Rehabilitation is crucial for regaining the ability to perform daily activities.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Long-Term Disability:            
              </span>Inadequate rehab can lead to long-term disability and reduced quality of life.
            </li><li>
              <span className="font-semibold text-gray-900 pr-1">
              Need for Another Surgery:            
              </span>Poor recovery and complications might necessitate additional surgeries.
            </li>

          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           SURGICAL (Pre- / Post) TREATMENTS           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Education and Counseling:            
              </span>We provide guidance on what to expect before, during, and after surgery. Instructions on home safety and assistive devices.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Pain Management Techniques:           
              </span>We use physical therapy modalities to reduce pain pre-surgery. Examples include heat, cold, Infra-Red, Ultrasound, Phonophoresis, Electrical Stimulation, Kinesio taping, Instrument-Assisted and Manual Soft tissue mobilization.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Breathing Training and Circulation Treatments:            
              </span>We aim to improve lung function and reduce the risk of post-surgery blood clots. We also offer Manual Lymphatic Drainage for optimal results of all surgeries.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Manual Lymphatic Drainage:            
              </span>A specialized form of massage technique to direct proper lymph flow.  This technique significantly reduces swelling and healing time, increases muscle and joint function and reduces pain.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                Manual Therapy:           
              </span>Hands-on techniques to reduce scar tissue, joint mobilization, Kinesio taping and lymphatic drainage and improve range of motion.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Progressive Strengthening Exercises:            
              </span>We prepare muscles around the joint for surgery. Our primary focus is on improving flexibility and joint mobility.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Posture and Core Stability Work:            
              </span>Enhances overall stability to prevent compensatory movements that could strain joint(s).           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Balance and Gait Training:            
              </span>We teach the proper use of walkers or crutches to ensure safe movement post-surgery. We ensure stability improvements and retrain walking patterns, increase balance and proprioception. Additionally, we aim to reduce the risk of falls.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Functional Movement Training:           
              </span>We prepare the shoulder for daily activities, improving mobility and reducing stiffness.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Activity Specific Return to Work and Sports program:            
              </span>Customized exercises to help patients return to work, sports, or daily routines safely.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Monitoring and Progress Tracking:            
              </span>Regular assessments to adjust the program based on recovery progress.
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Cosmetic Surgery Rehab`,
    url: ``,
    slug: `COSMETIC-SURGERY-REHAB`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
             Cosmetic surgeries can significantly improve a patient's quality of life, whether by alleviating chronic pain, improving health or enhancing physical appearance. However, the success of these surgeries heavily relies on comprehensive pre- and post-operative rehabilitation. Proper rehab ensures optimal recovery, minimizes complications, and helps patients return to their daily activities with improved function and confidence.         
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Rehabilitation is crucial for a diverse group of patients undergoing certain cosmetic surgeries:            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Mastectomy           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Lumpectomy
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Lymphotomy            
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Liposuction
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Facial, Oral, TMJ surgeries           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Pre- and Post-Operative Rehab can prevent several complications:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Prolonged Swelling and Bruising:            
              </span>Without rehab, swelling and bruising may take longer to subside.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Scar Tissue Formation:           
              </span>Lack of proper care can lead to excessive scar tissue, affecting the cosmetic outcome. We provide treatments to improve skin elasticity and blood circulation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Delayed Healing:            
              </span>The recovery process can be slower without guided rehabilitation. Treatments reducing inflammation and improving blood circulation can rapidly increase healing of affected tissues.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Reduced Range of Motion:            
              </span>Particularly in surgeries involving the face or limbs, movement can be restricted.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Increased Risk of Complications:            
              </span>Including infections and poor wound healing.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Progressive weakness and instability of Joints:            
              </span>Without specific exercises to regain muscle function of the surrounding surgical area, instability of joints can arise overtime producing chronic pain and functional difficulties. Clinicians at Tampa Motion can help prepare the body for surgery with light cardiovascular and resistance training. We ensure optimal weight and fitness levels.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Post-Operative Rehab Program for Cosmetic Surgeries:            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Scar Management:            
              </span>           
We use techniques like massage and soft tissue mobilizations to minimize scar tissue.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Swelling and Bruising Control:            
              </span>We provide Manual Lymphatic Drainage, Kinesio taping, Infra-red therapy, and cold therapy to address inflammatory processes.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Mobility and Strength Restoration:             
              </span>Gentle movements and progressive strength training to prevent stiffness and restore normal function.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Skin and Tissue Healing:            
              </span>We offer non-invasive treatments to improve skin tone, texture, and elasticity.
            </li>
            
          </ul>
        </div><p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },

  {
    title: `Multiple Sclerosis`,
    url: ``,
    slug: `MULTIPLE-SCLEROSIS`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Multiple Sclerosis (MS) is a chronic neurological condition where the immune system mistakenly attacks the protective covering of nerves (myelin), causing communication issues between the brain and body. MS affects the central nervous system, leading to a variety of symptoms that can disrupt daily life with fatigue and mobility issues. When it is severe, some individuals may face cognitive difficulties such as difficulties in reading, writing, understanding, or making any decision.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion Can Help You Manage Symptoms Of Multiple Sclerosis:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Each patient gets a personalized rehabilitation plan based on their specific symptoms. This plan may include physical therapy to boost strength and mobility, an occupational therapy to help with everyday tasks.          
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Women:            
              </span>Multiple Sclerosis primarily affects adults aged 20 to 50, with women being two to three times more likely to be diagnosed than men.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Younger Adults:            
              </span>Often experience relapsing MS, causing mobility issues and fatigue that impact work and social life.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Older Adults:            
              </span>They may develop progressive forms, leading to severe disabilities and requiring comprehensive Neurological Rehabilitation.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Mobility Limitations:            
              </span>Difficulty walking or maintaining balance, and muscle weakness can lead to increased slip or fall risk.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Fatigue:            
              </span>An extensive symptom that affects energy levels and overall quality of life.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Cognitive Impairments:            
              </span>Issues with memory, attention, and problem-solving abilities can complicate daily tasks.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Spasticity and Muscle Weakness:           
              </span>These conditions can hinder movement and contribute to discomfort.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Emotional Challenges:            
              </span>Anxiety and depression are prevalent among MS patients, impacting their mental health and social engagement.           
            </li>
            
          </ul>
        </div>
      </div>
    </div>`,
  },
  {
    title: `Lupus`,
    url: ``,
    slug: `Lupus`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Lupus, specifically systemic lupus erythematosus (SLE), is a chronic autoimmune disease where the immune system attacks healthy tissues and organs unintentionally. It can affect the skin, joints, kidneys, heart, and nervous system. Symptoms vary widely but often include joint pain, fatigue, skin rashes, and neurological issues, making it challenging to manage without specialized care. Early diagnosis and ongoing care are essential, as complications like kidney damage and cardiovascular issues can occur.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion Can Help You Manage Symptoms Of Lupus:            
          </h2>
         
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
We use targeted physical therapy techniques to improve flexibility, reducing joint pain, and stiffness. So, you can perform everyday tasks with ease and reduce the risk of falls.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We develop strategies and strength-building exercises to improve energy levels and build muscle strength, making it easier to carry out daily tasks without feeling fatigued.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our therapists guide patients on how to avoid triggers of skin rashes, reduce neurological challenges and incorporate low-impact exercises for lupus management.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>For issues related to the kidneys, heart, and lungs, our team of specialists creates a rehabilitation plan that includes routines and treatments to support cardiovascular and respiratory health.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
           
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Younger Women:            
              </span>Often experience more prominent symptoms that can interfere with a healthy lifestyle.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Older Adults:            
              </span>May face complications related to long-term lupus management, including increased risk of organ damage and chronic pain.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Gender Differences:            
              </span>           
Lupus predominantly affects women, especially those between the ages of 15 and 44. It is less common in men and children but can still occur.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Joint Pain and Stiffness:            
              </span>Often leading to difficulty in movement and daily activities.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Fatigue:            
              </span>Many lupus patients experience extreme tiredness from daily activities, making even simple tasks feel exhausting.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Skin Rashes:            
              </span>Such as the unique butterfly rash on the face, which can impact self-esteem.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Organ Involvement:            
              </span>Lupus can affect the kidneys, heart, and lungs, leading to more severe health issues.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Neurological Symptoms:             
              </span>Many lupus patients experience headaches, memory loss, and difficulty concentrating.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Muscle Weakness:            
              </span>Due to inflammation and fatigue, muscle weakness is common, reducing strength and movement.
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>`,
  },
  {
    title: `Stroke (Cva/Tia)`,
    url: ``,
    slug: `STROKE-CVA-TIA`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            A stroke,  a cerebrovascular accident (CVA), occurs when blood flow to the brain is interrupted, leading to potential brain damage and a range of physical issues such as paralysis, difficulty speaking, cognitive impairments, and more. Stroke rehabilitation is a specialized program designed to help individuals recover from a stroke. It is dedicated to helping stroke survivors regain physical and emotional strength, improving their quality of life.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion Can Help You Recover From Stroke (CVA):            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We customize plans for individuals based on your specific needs. Our team focuses on strength, mobility, and daily functioning. Our therapies target specific deficits, such as walking ability, through physical therapy.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our therapies include neuroplasticity-based exercises, balance training, and coordination drills using modern tools and technologies to gain as much comfort as you can get.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We incorporate cognitive exercises to enhance memory, problem-solving, and attention for our patients to rebuild cognitive skills for daily living.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our team of clinicians work together to provide a supportive environment. It helps you manage the emotional and psychological impact of a stroke, offering coping strategies and stress-reduction techniques.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Age:            
              </span>Stroke can affect anyone. The risk increases with age, particularly in individuals over 55. However, younger adults can also experience strokes due to various factors.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Gender:            
              </span>Men are generally at a higher risk of having strokes at a younger age, while women tend to experience strokes later in life and may face more severe outcomes.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Associated conditions:            
              </span>Individuals with conditions such as high blood pressure, diabetes, or heart disease are at greater risk. Lifestyle factors such as smoking and obesity play a major role too.           
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Paralysis or Weakness:            
              </span>This usually affects one side of the body (hemiparesis), difficulty walking, and balance issues.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Cognitive Difficulties:            
              </span>Problems with memory, attention, and decision-making can hinder daily activities.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Speech and Swallowing Issues:            
              </span>Aphasia or dysphagia can affect communication and the ability to eat safely.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Emotional Changes:            
              </span>Many stroke survivors face depression or anxiety as they adjust to their new circumstances.
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>`,
  },
  {
    title: `Parkinson's Disease`,
    url: ``,
    slug: `PARKINSONS-DISEASE`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Parkinson’s Disease (PD) is a progressive neurological disorder that affects movement. It occurs when nerve cells in the brain that produce dopamine, a chemical that helps control movement, begin to break down. This leads to symptoms such as tremors, muscle stiffness, slowed movement (bradykinesia), and balance issues. Parkinson's disease rehabilitation is a specialized therapeutic approach designed to support individuals diagnosed with this neurological disorder.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion  Can Help You Recover From  Parkinson's Disease:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We focus on techniques like Kinesiotaping and others to reduce pain and improve walking speed. Our personalized therapeutic exercises based on LSVT BIG concept can reduce tremors and move with confidence.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We offer flexibility and core strengthening programs, to help Parkinson's patients improve mobility, reduce muscle rigidity, and enhance balance and posture.
            </li>
            </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Older Adults:            
              </span>           
Parkinson’s Disease primarily affects adults over 60. Older adults with Parkinson’s often experience more severe motor impairments. 
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Younger Onset:            
              </span>Parkinson’s can occur in younger individuals and may face a slower progression than the older.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Gender Differences:            
              </span>Men are more likely to develop Parkinson's disease than women. Men often experience more muscle stiffness, while women may have stronger tremors and more non-motor symptoms like anxiety or depression.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Tremors:            
              </span>Individuals diagnosed with Parkinson’s disorder may face involuntary shaking, usually starting in the hands or fingers.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Bradykinesia:            
              </span>Slowed movements, making it hard to perform simple tasks and affecting movement.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Muscle Stiffness:            
              </span>Rigid muscles that can limit the range of motion and cause pain.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Impaired Balance and Posture:            
              </span>
This increases the risk of falls and affects the ability to move safely.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
             Speech and Swallowing Difficulties:             
              </span>Parkinson’s can lead to speech problems (slurred or soft speech) and difficulty swallowing (dysphagia).           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Cognitive Impairments:            
              </span>Memory problems, reduced focus, and dementia in later stages.
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Ehlers Danlos Syndrome`,
    url: ``,
    slug: `EHLERS-DANLOS-SYNDROME`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
             Ehlers-Danlos Syndrome (EDS) is a collection of genetic disorders that impact connective tissues, influencing the skin, joints, and the walls of blood vessels. People with EDS often have hypermobile joints, skin that bruises easily, and fragile tissues. Rehabilitation for EDS aims to help manage symptoms and improve quality of life. This is achieved through a combination of manual lymphatic massage, therapeutic exercises, education, and supportive treatments.         
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion Can Help You Recover From Ehlers Danlos Syndrome:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We create individualized therapeutic plans to strengthen muscles around hypermobile joints, improve stability, and reduce pain and the risk of dislocations or injury.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We treat patients with gentle, hands-on techniques to reduce muscle tension and alleviate chronic pain. We provide manual lymphatic massage to address swelling and promote better circulation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>With Kinesiotaping and specialized taping, the patients get additional joint support and protection during daily activities.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We offer guidance on how to adapt daily activities and routines to reduce injury risks and minimize EDS-related complications.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Age:            
              </span>Symptoms may first appear in childhood or adolescence, but many individuals are diagnosed in their 20s or 30s.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Gender:           
              </span>EDS affects both men and women equally. However, women may be more likely to seek medical help due to the impact of symptoms on daily life.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Genetic Factors:            
              </span>Since EDS is a genetic condition, those with a family history of connective tissue disorders are at higher risk.
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Joint Hypermobility and Instability:            
              </span>Joints that move beyond their normal range, leading to frequent dislocations, sprains, and chronic pain.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Skin Fragility:            
              </span>Delicate, stretchy skin that bruises easily and may tear or bruise with minimal impact.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Fatigue and Muscle Weakness:            
              </span>Constantly managing joint instability and pain often leads to muscle fatigue and overall physical exhaustion.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Cardiovascular Issues:            
              </span>Certain types of EDS can affect blood vessel walls, causing a risk of arterial or organ rupture in more severe cases.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Digestive Problems:            
              </span>Individuals with EDS can have digestive issues, like trouble moving food through the stomach and intestines, because of weak connective tissues.           
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Sports-Related Injuries (Sprains/ Strains / Fractures)`,
    url: ``,
    slug: `SPORTS-RELATED-INJURIES-SPRAINS-STRAINS-FRACTURES`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Sports-related injuries, such as sprains, strains, and fractures, are common conditions that affect the musculoskeletal system. A sprain involves ligament damage, while a strain affects muscles or tendons. Fractures are breaks in the bone, often caused by high-impact sports or repetitive stress. These injuries can result in significant pain, reduced mobility, and a prolonged recovery process without proper treatment.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Adolescents and young adults (ages 8-35):            
              </span>Active individuals in this age group are most susceptible to sports-related injuries, including sprains, strains, and fractures.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Males:             
              </span>More likely to experience injuries due to higher participation in high-impact sports such as basketball, soccer, and football.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Females:            
              </span>At equal risk, especially for conditions like ACL tears, influenced by biomechanical differences in movement.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Sprains:            
              </span>Characterized by swelling, bruising, and difficulty bearing weight.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Strains:           
              </span>Muscle pain, weakness, and stiffness, often occurring in the back or hamstrings.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Fractures:            
              </span>Severe pain, swelling, and inability to move the affected area, often needing immobilization or surgery.           
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion  Can Help in the Recovery Process:            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Tampa Motion  offers specialized treatments like manual therapy to reduce swelling and improve joint stability. Taping and bracing is used to support the affected area, while targeted exercises help restore mobility and strength. Our personalized rehabilitation plan ensures a safe return to activity, minimizing the risk of re-injury.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We focus on relieving muscle pain and stiffness through hands-on manual therapy and gentle stretching techniques. Targeted strengthening exercises for the specific muscle group help restore function and prevent future strain.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Clinicians at Tampa Motion offer post-injury rehabilitation to restore strength and mobility after fractures. Our approach combines therapeutic exercises and manual techniques to enhance motion and prevent complications. We collaborate with your medical provider for a smooth recovery journey.           
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Manual Lymphatic Drainage`,
    url: ``,
    slug: `MANUAL-LYMPHATIC-DRAINAGE`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Do you struggle with swelling, discomfort, or slow recovery after surgery? We understand how these issues can impact your quality of life. Our Manual Lymphatic Drainage (MLD) service is specifically designed to help manage lymphedema and promote faster healing after surgeries. This gentle, non-invasive therapy focuses on stimulating the lymphatic system, improving circulation, and reducing swelling to support your body’s natural detoxification process.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Who Can Benefit from Manual Lymphatic Massage?           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Lymphedema:           
              </span>Swelling caused by a buildup of lymph fluid, often after surgery, injury, or cancer treatment.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Post surgical recovery:           
              </span>Enhances healing after procedures like liposuction, facelifts, tummy tucks, or breast augmentation.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Chronic swelling:           
              </span>Helps alleviate persistent swelling caused by conditions that affect the lymphatic system.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Risks of Overlooking Manual Lymphatic Massage for Swelling and Recovery            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Persistent swelling:            
              </span>Swelling that doesn’t subside naturally and can lead to discomfort and limited movement.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Delayed healing:            
              </span>Without lymphatic stimulation, your body may struggle to clear toxins and promote recovery after surgery.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
             Increased discomfort:              
              </span>Fluid buildup can cause a feeling of heaviness or tightness, making everyday activities difficult.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Pain and Neuropathy:            
              </span>lymphedema may cause chronic pain of joints and nerves that may last for years.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Mobility issues:            
              </span>Restricted flexibility and muscle weakness can lead to severe mobility disorders.            
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Manual Lymphatic Massage at Tampa Motion Supports Your Healing Journey            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Manual Lymphatic Massage encourages fluid drainage, reducing swelling and improving mobility. Our gentle techniques help eliminate excess fluid, easing discomfort and restoring movement.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>By promoting lymphatic flow, our massage enhances circulation and speeds up detoxification, helping your body recover faster after surgery and reducing downtime.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Fluid buildup can cause tightness and heaviness. Lymphatic massage targets these areas, relieving discomfort and restoring balance, so you can move with greater ease.           
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },

  {
    title: `Pelvic Floor Strengthening`,
    url: ``,
    slug: `PELVIC-FLOOR-STRENGTHENING`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            The pelvic floor muscles hold the pelvic organ in their unique positions for optimal functions.  Hence, weakness of these muscles can directly affect the function of the bladder, intestines, urethra, rectum, vagina, cervix and prostate.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Who is Affected the Most?           
          </h2>
          <p className="text-gray-700 mb-9 leading-relaxed">
           Both men and women can suffer from pelvic floor weakness due to several reasons such as surgeries, trauma (childbirth / accidents) neurological conditions, menopause, aging.  Even genetics can play a role where some people simply have weaker muscles and connective tissue.           
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
           How Tampa Motion Can Help in the Recovery Process:           
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>For pregnant women, we offer gentle manual therapy and customized programs to ease back pain, sciatica, and joint stiffness, with core-strengthening exercises to improve posture and reduce strain.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Postpartum care of Tampa Motion includes targeted therapy to strengthen the pelvic floor, correct muscle imbalances, and restore core stability, reducing discomfort.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>In general, our clinicians will guide you, using evidence-based practice to safely strengthen weak muscles and relax muscles that are too tight.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
Pregnant women and new mothers can suffer from hormonal changes, inflammation, weight gain, and post-birth recovery often lead to musculoskeletal issues.
The Pelvic floor can be weakened by:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Supporting the weight of the uterus during pregnancy           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Vaginal childbirth, which may overstretch the muscles
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>The pressure of obesity           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Chronic constipation and straining to poo
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Constant coughing           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Some forms of surgery that require cutting the muscles (including prostate cancer treatment in males)
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Lower levels of oestrogen after menopause           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Pelvic floor muscle tension caused by painful periods, endometriosis
            </li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Personal/Work Injury`,
    url: ``,
    slug: `PERSONAL-WORK-INJURY`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
                      
Personal and  work injuries can severely harm your mobility and quality of life, including ability to work and provide for oneself. Work injuries, from repetitive strain or accidents, can cause chronic pain, stiffness, and limited movement.
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who is Affected the Most?            
          </h2>
          
          <ul className="list-none pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Individuals in physically demanding jobs or with poor ergonomics:            
              </span>Particularly those aged 25 to 55, are at a higher risk for work-related injuries.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Common Conditions Patients Face            
          </h2>
          <ul className="list-none pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Work-related injuries:           
              </span>Strains, sprains, and repetitive motion injuries such as  tendonitis, back pain, carpal tunnel syndrome.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How Tampa Motion Can Help in the Recovery Process            
          </h2>
          <ul className="list-none pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>For strains, sprains, or repetitive motion injuries, our comprehensive treatment plans combine therapeutic exercises, manual therapy, and postural correction to relieve pain, restore function, and work-hardening to prevent future injuries.           
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Flexibility Lab (Passive Stretching)`,
    url: ``,
    slug: `FLEXIBILITY-LAB-PASSIVE-STRETCHING`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Do you often feel stiff, experience limited range of motion, or deal with aches that make daily tasks more challenging?  We understand that flexibility is more than just about movement—it's about living comfortably and confidently. Our Flexibility Lab focuses on passive stretching techniques tailored to your body’s needs, promoting better mobility, relaxation, and overall well-being.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who Can Benefit from Passive Stretching?            
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
          This service is ideal for individuals experiencing:            
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Chronic stiffness:           
              </span>           
Whether from a sedentary lifestyle or repetitive movements.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Post-surgical recovery:           
              </span>
To gently regain range of motion under professional guidance.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Athletic performance plateaus:            
              </span>For those looking to enhance flexibility for improved movement efficiency.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Stress-related tension:            
              </span> Passive stretching helps calm the mind and ease tight muscles.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Risks of Overlooking Professional Support for Your Flexibility Needs           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Restricted mobility:           
              </span>Making even simple movements like bending, reaching, and walking uncomfortable           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Increased injury risk:           
              </span>Tight muscles are more prone to strains and tears.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Chronic pain:           
              </span>Over time, imbalances in flexibility can cause discomfort in joints and muscles.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Postural complications:            
              </span>
Poor flexibility often contributes to misalignment and slouched, poor posture.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           How the Flexibility Lab at Tampa Motion,   Breaks Through Your Stretching Barriers          
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our passive stretching techniques target areas of stiffness, helping you regain ease in movements like bending and reaching.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
By improving flexibility and muscle balance, we reduce your risk of strains and tears, keeping you safe during physical activity.

            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We address muscle imbalances and tightness to alleviate chronic pain, offering you long-term relief and comfort.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
Our stretches improve flexibility, realign your posture, and reduce strain on your spine, promoting better body mechanics.
            </li>
            
          </ul>
        </div><p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Core Lab (Strengthening/Functional Training)`,
    url: ``,
    slug: `CORE-LAB-STRENGTHENING-FUNCTIONAL-TRAINING`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
             Do you often struggle with low energy, poor posture, or discomfort during physical activity? We understand that core strength is more than just about looking toned—it's about building a stable foundation for your body to function at its best. Our Core Lab focuses on strengthening the muscles that support your spine, pelvis, and abdomen, improving balance, posture, and overall strength needed for daily activities and higher-level work and sports related functions.         
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Who Can Benefit from Core Strengthening?           
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
          This service is ideal for individuals experiencing:            
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Weak core muscles:           
              </span>A common cause of poor posture and discomfort during daily tasks or exercise.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Neck and Back pain:           
              </span>Strengthening the core can provide relief from chronic pain by supporting your spine.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Post-surgical recovery:           
              </span> Core strengthening exercises help rebuild strength after procedures like back surgery, joint replacements.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Athletic performance:           
              </span>
A strong core is key for improving coordination, agility, and endurance in sports.
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
Risks of Overlooking Professional Support for Your Core Strengthening
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Poor posture:            
              </span>           
Without a strong core, slouching or misalignment can become habitual, leading to back and neck pain.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Increased injury risk:           
              </span>A weak core can strain muscles, joints, and ligaments, making you more vulnerable to injuries.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Limited mobility:           
              </span>A lack of core strength can hinder your ability to move freely and comfortably.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Imbalance in movement:           
              </span>Without core stability, your body may rely on other muscle groups, leading to overuse and discomfort.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                      
How the Core Lab at Tampa Motion Improve Your Strength and Stability
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We help strengthen the muscles supporting your spine, helping you maintain proper alignment and reducing back and neck pain caused by poor posture.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our core exercises improve stability, supporting muscles, joints, and ligaments, lowering the risk of strains and injuries from weak core muscles.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>           
By targeting core strength, we improve your flexibility and ease of movement, making everyday tasks and physical activities more comfortable.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>
We focus on core stability to prevent your body from relying on other muscle groups, reducing discomfort, and correcting movement imbalances for better overall function.
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Vestibular And Balance Therapy`,
    url: ``,
    slug: `VESTIBULAR-AND-BALANCE-THERAPY`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Do you experience dizziness, vertigo, or challenges with balance that disrupt your daily life? We understand how these issues can affect your overall well-being. Our Vestibular and Balance Therapy program is specifically designed to address inner ear disorders and neurological conditions that impact your body’s stability.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Who Can Benefit from Vestibular and Balance Therapy?           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Vertigo and dizziness:           
              </span>Persistent spinning sensations or lightheadedness caused by inner ear issues, head injuries, or migraines.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Post-concussion symptoms:           
              </span>Lingering balance problems, dizziness, or unsteadiness following a head injury or mild traumatic brain injury.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Balance disorders:           
              </span>Struggles with coordination or stability due to aging, neurological conditions, or reduced muscle strength           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Neurological conditions:            
              </span>Symptoms like unsteadiness or impaired mobility related to stroke, Parkinson’s disease, or Multiple Sclerosis.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Falls and fear of falling:            
              </span>Frequent falls or anxiety about falling, especially in older adults, impacts confidence in daily activities.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Risks of Overlooking Vestibular and Balance Therapy for Stability and Mobility           
          </h2>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Persistent dizziness:           
              </span>Without therapy, dizziness can linger, disrupting your ability to perform daily activities comfortably and safely.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Higher fall risk:            
              </span>Balance issues can increase the likelihood of falls, which may lead to injuries and limit independence.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Slower neurological recovery:            
              </span> For conditions like stroke or Parkinson’s disease, skipping therapy may delay progress in restoring coordination and mobility.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Reduced confidence in movement:           
              </span>Living with unaddressed balance problems can lead to a fear of falling, making it harder to stay active and engaged in your life.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Increased physical strain:            
              </span>Overcompensating for balance challenges can lead to muscle tension or pain in other areas of the body, further impacting your quality of life.           
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           How Vestibular and Balance Therapy at Tampa Motion Supports Your Healing Journey           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our therapists use targeted exercises to recalibrate your vestibular system. These exercises help you feel steady and comfortable during daily activities.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Balance training improves your stability and strength. With practice, you move more confidently and avoid injuries caused by falls.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our team creates specific exercises to restore coordination after strokes or during Parkinson’s treatment. These exercises rebuild strength and mobility effectively.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our sessions help you trust your ability to move safely. You stay active and enjoy your favorite activities without fear of falling.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Strengthening exercises relieve muscle tension and correct posture. You feel more balanced and comfortable during everyday tasks.           
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `School Based Sports Training and Rehabilitation Programs`,
    url: ``,
    slug: `School-based-sports-training-and-rehabilitation-programs`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
             Are you a student-athlete looking to enhance your performance or recover from an injury? We understand that participating in school sports is not just about competition—it’s about building strength, endurance, and resilience while staying healthy. Our School-Based Sports Training and Rehabilitation Programs are designed to help athletes at every level stay in top shape and safely recover when needed.         
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           Who Can Benefit from School-Based Sports Training and Rehabilitation?           
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
                      
This program is ideal for:
          </p>
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Student-athletes:           
              </span>Those looking to improve overall physical performance, strength, and fitness for better results in their sport.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Injury recovery:            
              </span>Athletes recovering from sprains, strains, or other injuries needing a structured rehabilitation plan to return safely to their sport.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Injury prevention:            
              </span>Young athletes who want to build strength, flexibility, and proper movement patterns to reduce the risk of injuries during practices or games.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Improved performance:            
              </span>Athletes aiming to enhance coordination, agility, and endurance to perform at their peak during competition.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Risks of Overlooking Professional Sports Training and Rehabilitation            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Injury risk:            
              </span>Without proper training or rehabilitation, athletes are more likely to suffer from sprains, strains, or overuse injuries.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Reduced performance:            
              </span>Inadequate conditioning can lead to decreased strength, agility, and endurance during games and practices.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Unbalanced movement:            
              </span>Poor training may cause athletes to develop bad habits that affect their overall physical performance and posture.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
              Longer recovery times:            
              </span>Failing to address injuries early can lead to longer recovery periods and more severe setbacks.
            </li>
            
          </ul>
        </div>
         <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
           How School-Based Sports Training and Rehabilitation Programs at Tampa Motion Enhance Athletic Performance and Recovery           
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Our professional training programs teach athletes proper techniques, reducing the risk of sprains, strains, and overuse injuries.          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We focus on improving strength, agility, and endurance, ensuring athletes perform at their best during practices and games.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>We provide tailored exercises that correct movement patterns and posture, preventing bad habits and promoting efficient, injury-free performance.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Our rehabilitation programs address injuries early with customized treatment plans that promote faster recovery. We focus on strengthening and rebuilding affected areas, ensuring a quicker return to full activity, and minimizing long-term setbacks.
            </li>
            
          </ul>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
  {
    title: `Work Place Ergonomics and Mobility Workshops for Businesses`,
    url: ``,
    slug: `Work-place-ergonomics-and-mobility-workshops-for-businesses`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className="  md:space-x-6">
        <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Are your employees dealing with discomfort, fatigue, or injuries from poor posture or repetitive movements? Workplace wellness goes beyond just having the right tools. It’s about creating an environment where employees feel comfortable and can perform at their best.          
            </p>
        </div>         
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Who Can Benefit from Work-Place Ergonomics and Mobility Workshops?            
          </h2>
          
          <ul className="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Businesses prioritizing employee health and performance:           
              </span>           
Companies that want to create a healthier, more productive workplace.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Employees who sit for long hours:           
              </span>Individuals working at desks and computers for extended periods, where poor posture can lead to discomfort and pain.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Workers performing repetitive tasks:           
              </span>Employees are involved in tasks that require repetitive movements, which can lead to strain and injury over time.           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Individuals engaged in physical labor:           
              </span>Employees who perform manual tasks or heavy lifting, benefit from better posture, stretching, and mobility exercises to prevent injury.
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
               Teams needing to improve overall well-being:           
              </span>Any workforce looking to reduce discomfort, improve flexibility, and boost productivity through healthier movement habits.           
            </li>
            
          </ul>
        </div>
        <div>
          <h2 classname="text-2xl font-semibold text-gray-900 mt-8 mb-4">
         Risks of Overlooking Proper Ergonomics and Mobility Training            
          </h2>
          <ul classname="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
               Chronic discomfort:           
              </span>Poor ergonomics can lead to back pain, neck stiffness, and other musculoskeletal issues.           
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
               Decreased productivity:           
              </span>Discomfort from improper posture can distract employees, leading to reduced focus and efficiency.
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
               Increased injury risk:           
              </span>Improper sitting, lifting, or repetitive movements can lead to long-term injuries needing surgeries, affecting employee performance and morale.           
            </li>
            <li>
              <span classname="font-semibold text-gray-900 pr-1">
               Higher healthcare costs:           
              </span>Strained muscles and repetitive injuries can result in more sick days, expensive medical expenses, and insurance claims.
            </li>
            
          </ul>
        </div>
        <div>
          <h2 classname="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          
How Workplace Ergonomics and Mobility Workshops at Tampa Motion Improve Business Performance
            
          </h2>
          <ul classname="list-disc pl-8 list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              Personalized assessments and posture training reduce back pain, neck stiffness, and other musculoskeletal issues.           
            </li>
            <li>
              Improved posture and movement habits keep employees comfortable and focused, boosting efficiency.
            </li>
            <li>
              Safe movement techniques and mobility exercises lower the risk of injuries from repetitive tasks or poor posture.           
            </li>
            <li>
              Early intervention reduces muscle strain, injuries, sick days, and medical expenses, saving your business money.
            </li>
            
          </ul>
        </div><p className="text-gray-700 mb-4 leading-relaxed">
                      
        </p>
      </div>
    </div>`,
  },
];

export const insuranceSlug = [
  {
    title: `Insurance`,
    url: ``,
    slug: `insurance`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
     <div className=" ">
        <div>
          <div className="text-gray-700 text-lg lg:text-[22px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6">
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Medicare</p>
              </div>
            </div>

            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Medicaid</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Molina Healthcare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Aetna Better Health (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Magellan Healthcare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Sunshine Healthcare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Wellcare/Stay Well (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Simply Healthcare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Caresource (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Care Plus (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Oscar Health (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Optemum Health (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Tricare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">AETNA (Commercial)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">United Healthcare (MCO)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">National General (National General)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Humana (Medicare Advantage Plan)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Cigna (Commercial)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Anthem BCBS (Commercial)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Kaiser (Commercial)</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Ambetter (Commercial)</p>
              </div>
            </div>
          </div>
        </div>
      </div>`,
  },
  {
    title: `Non-Insurance`,
    url: ``,
    slug: `non-insurance`,
    icon: ``,
    sortTitle: ``,
    heroDescription: ``,
    shortDescription: ``,
    description: ` 
    <div>
      <div className=" mb-8 lg:mb-12">
        <div>
             <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Non-Insurance Payment Options
            </h2>
        </div>  
        <p className="text-gray-700 mb-4 leading-relaxed">
            Don’t have insurance? No problem. At Tampa Motion we have several affordable packages for all your rehabilitation needs.
          
          </p>       
        <div>
          
          <ul className="list-decimal  list-inside text-gray-700 mb-4 leading-relaxed space-y-2">
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>  Evaluation and 1 treatment visit: $200         
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Evaluation and 6 treatment visits combo package: $400
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span> Evaluation and 12 treatment visits combo package: $700 (value option)          
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Evaluation and 24 treatment visits combo package: $1300
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>1 treatment visit (a la carte): $90           
            </li>
            <li>
              <span className="font-semibold text-gray-900 pr-1">
                          
              </span>Cash or check payments: 5% discount of total services
            </li>
            
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
             What to expect during an Evaluation:         
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            A Physical Therapy evaluation is your first encounter with a Doctor of Physical Therapy that will include a clinical examination, history intake, systems review, and objective data collection.  The evaluation helps your therapist to develop a personalized treatment plan and provides a baseline to track progress. This is where the patient and the therapist will work together to set expectations for the treatment plan. The average time for an evaluation is between 60-90 minutes.
          
          </p>
          
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
             What to expect during a treatment session:     
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
           Depending on an individual’s diagnosis and needs, several treatments will be used for rehabilitation, such as exercise, passive stretching, soft tissue mobilization, joint mobilization, lymphatic drainage massage, functional training, modalites (Ultrasound, Cold Laser, Kinesiotaping, Traction, heat/cold), E-stim). The average time for a treatment session is between 45-90 minutes.
          
          </p>
          
        </div>
      <div className="text-center flex flex-col justify-center items-center pt-10 lg:pt-20">
      
         <h4 className="text-gray-700 text-xl lg:text-2xl font-semibold mb-2 leading-relaxed">
         NEW PATIENT SPECIALS UNTIL 4/30/2025         
        </h4>
        <p className="text-gray-700 mb-4 leading-relaxed">SPECIAL PRICING OPTIONS FOR NEW PATIENTS</p>
      
      </div>
      </div>
          <div className="text-gray-700 text-lg lg:text-[22px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 xl:gap-6">
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">10% OFF of All Services</p>
              </div>
            </div>
            <div className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black">Free Consultation</p>
              </div>
            </div>
            <a href="tel:+1 813-291-3536" className=" bg-gradient-to-l from-[#0aa3e8] to-[#34e1d8] p-[1px] rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-white rounded-2xl p-4 h-full flex items-center justify-center">
                <p className="text-center text-black" >Call +1 813-291-3536 to Schedule</p>
              </div>
            </a>
            </div>
    </div>`,
  },
];
