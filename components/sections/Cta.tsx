// "use client";

// import { useState } from "react";

// import Button from "@/components/ui/Button";
// import { PhoneIcon } from "@/components/icons";

// import { AnimatePresence, motion, Variants } from "framer-motion";

// const containerVariants: Variants = {
//   hidden: {},

//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },

//   show: {
//     opacity: 1,
//     y: 0,

//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const gridVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 1.1,
//   },

//   show: {
//     opacity: 0.1,
//     scale: 1,

//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const formVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.96,
//     y: 30,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,

//     transition: {
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     scale: 0.96,
//     y: -20,

//     transition: {
//       duration: 0.3,
//     },
//   },
// };

// const successVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.9,
//     y: 20,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,

//     transition: {
//       duration: 0.5,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     y: -20,

//     transition: {
//       duration: 0.3,
//     },
//   },
// };

// export default function CTA() {
//   const [showForm, setShowForm] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("/api/devis", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
  
//       console.log(data);
  
//       if (!response.ok) {
//         throw new Error(data.message);
//       }
  
//       setShowForm(false);
  
//       setTimeout(() => {
//         setSuccess(true);
//       }, 250);
  
//       setTimeout(() => {
//         setSuccess(false);
//       }, 3500);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         py-24
//         bg-[#023e8a]
//         text-center
//         overflow-hidden
//       "
//     >
//       {/* BACKGROUND */}

//       <motion.div
//         className="
//           absolute
//           inset-0
//           bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)]
//           bg-[size:48px_48px]
//         "
//         variants={gridVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       />

//       <div
//         className="
//           relative
//           max-w-3xl
//           mx-auto
//           px-6
//           h-[420px]
//           flex
//           items-center
//           justify-center
//         "
//       >
//         <AnimatePresence mode="wait">
//           {/* CTA */}

//           {!showForm && !success && (
//             <motion.div
//               key="cta"
//               variants={containerVariants}
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               className="w-full"
//             >
//               <motion.h2
//                 className="
//                   font-bebas
//                   text-5xl
//                   md:text-7xl
//                   text-navy
//                   leading-none
//                   tracking-wide
//                 "
//                 variants={itemVariants}
//               >
//                 Prêt à sécuriser
//                 <br />
//                 votre activité ?
//               </motion.h2>

//               <motion.p
//                 className="
//                   mt-6
//                   text-white/60
//                   leading-8
//                   max-w-xl
//                   mx-auto
//                 "
//                 variants={itemVariants}
//               >
//                 Contactez-nous dès aujourd'hui pour une évaluation gratuite de
//                 vos besoins en sécurité. Nos experts vous répondent sous 24h.
//               </motion.p>

//               <motion.div
//                 className="
//                   mt-10
//                   flex
//                   flex-col
//                   sm:flex-row
//                   justify-center
//                   gap-4
//                 "
//                 variants={itemVariants}
//               >
//                 <Button onClick={() => setShowForm(true)}>
//                   Demander un devis gratuit
//                 </Button>
//               </motion.div>

//               <motion.div
//                 className="
//                   mt-8
//                   flex
//                   justify-center
//                   items-center
//                   gap-3
//                   text-white/60
//                   text-sm
//                 "
//                 variants={itemVariants}
//               >
//                 <PhoneIcon className="w-5 h-5 text-red" />

//                 <span>
//                   Disponible 24h/24 —
//                   <strong className="text-white ml-2">
//                     00212661370673 / 00212661187105
//                   </strong>
//                 </span>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* FORM */}

//           {showForm && (
//             <motion.div
//               key="form"
//               variants={formVariants}
//               initial="hidden"
//               animate="show"
//               exit="exit"
//               className="
//                 relative
//                 w-full
//                 bg-[#F4F1E8]
//                 border
//                 border-[#1E1E1C]/10
//                 p-8
//                 text-left
//                 shadow-2xl
//                 overflow-hidden
//               "
//             >
//               <div
//                 className="
//                   absolute
//                   top-0
//                   left-0
//                   right-0
//                   h-1
//                   bg-red
//                 "
//               />

//               <h3
//                 className="
//                   font-bebas
//                   text-4xl
//                   text-[#1E1E1C]
//                   mb-6
//                 "
//               >
//                 Demande de devis
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Nom complet/ Raison social"
//                   className="
//                     w-full
//                     bg-transparent
//                     border
//                     border-[#1E1E1C]/20
//                     p-4
//                     text-[#1E1E1C]
//                     placeholder:text-[#1E1E1C]/40
//                     outline-none
//                   "
//                 />

//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Email"
//                   className="
//                     w-full
//                     bg-transparent
//                     border
//                     border-[#1E1E1C]/20
//                     p-4
//                     text-[#1E1E1C]
//                     placeholder:text-[#1E1E1C]/40
//                     outline-none
//                   "
//                 />

//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   placeholder="Téléphone"
//                   className="
//                     w-full
//                     bg-transparent
//                     border
//                     border-[#1E1E1C]/20
//                     p-4
//                     text-[#1E1E1C]
//                     placeholder:text-[#1E1E1C]/40
//                     outline-none
//                   "
//                 />

//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Décrivez votre besoin"
//                   className="
//                     w-full
//                     bg-transparent
//                     border
//                     border-[#1E1E1C]/20
//                     p-4
//                     text-[#1E1E1C]
//                     placeholder:text-[#1E1E1C]/40
//                     outline-none
//                     min-h-[120px]
//                   "
//                 />

//                 <div className="flex gap-4 pt-4">
//                   <Button type="submit">Envoyer</Button>

//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="
//                       text-[#1E1E1C]/50
//                       text-sm
//                     "
//                   >
//                     Annuler
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           )}

//           {/* SUCCESS */}

//           {success && (
//             <motion.div
//               key="success"
//               variants={successVariants}
//               initial="hidden"
//               animate="show"
//               exit="exit"
//               className="
//                 min-h-[350px]
//                 flex
//                 flex-col
//                 justify-center
//                 items-center
//               "
//             >
//               <h3
//                 className="
//                   font-bebas
//                   text-5xl
//                   text-white
//                 "
//               >
//                 Demande envoyée ✓
//               </h3>

//               <p
//                 className="
//                   mt-4
//                   text-white/60
//                 "
//               >
//                 Notre équipe vous répondra sous 24h.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Button from "@/components/ui/Button";
// import { PhoneIcon } from "@/components/icons";
// import { motion, Variants } from "framer-motion";
// import { useDevisModal } from "@/components/cta/DevisModalContext";

// const containerVariants: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const gridVariants: Variants = {
//   hidden: { opacity: 0, scale: 1.1 },
//   show: {
//     opacity: 0.08,
//     scale: 1,
//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function CTA() {
//   const { openModal } = useDevisModal();

//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         py-24
//         bg-[#023e8a]
//         text-center
//         overflow-hidden
//       "
//     >
//       {/* BACKGROUND GRID */}
//       <motion.div
//         className="
//           absolute
//           inset-0
//           bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)]
//           bg-[size:48px_48px]
//         "
//         variants={gridVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       />

//       <div
//         className="
//           relative
//           max-w-3xl
//           mx-auto
//           px-6
//           min-h-[420px]
//           flex
//           items-center
//           justify-center
//         "
//       >
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="w-full"
//         >
//           {/* TITLE */}
//           <motion.h2
//             variants={itemVariants}
//             className="
//               font-bebas
//               text-5xl
//               md:text-7xl
//               text-white
//               leading-none
//               tracking-wide
//             "
//           >
//             Prêt à sécuriser
//             <br />
//             votre activité ?
//           </motion.h2>

//           {/* DESCRIPTION */}
//           <motion.p
//             variants={itemVariants}
//             className="
//               mt-6
//               text-white/60
//               leading-8
//               max-w-xl
//               mx-auto
//             "
//           >
//             Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
//             besoins en sécurité. Nos experts vous répondent sous 24h.
//           </motion.p>

//           {/* BUTTON */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex justify-center"
//           >
//             <Button onClick={openModal}>
//               Demander un devis gratuit
//             </Button>
//           </motion.div>

//           {/* PHONE */}
//           <motion.div
//             variants={itemVariants}
//             className="
//               mt-8
//               flex
//               justify-center
//               items-center
//               gap-3
//               text-white/60
//               text-sm
//             "
//           >
//             <PhoneIcon className="w-5 h-5 text-red" />

//             <span>
//               Disponible 24h/24 —
//               <strong className="text-white ml-2">
//                 00212661370673 / 00212661187105
//               </strong>
//             </span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Button from "@/components/ui/Button";
import { PhoneIcon } from "@/components/icons";
import { motion, Variants } from "framer-motion";
import { useDevisModal } from "@/components/cta/DevisModalContext";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 0.06,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTA() {
  const { openModal } = useDevisModal();

  return (
    <section
      id="contact"
      className="
        relative
        py-24
        bg-gradient-to-br
        from-[#023E8A]
        via-[#023E8A]
        to-[#01275c]
        text-center
        overflow-hidden
      "
    >
      {/* AURORA GLOWS */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          top-[-20%]
          left-[-10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[radial-gradient(circle,rgba(14,165,233,0.35),transparent_70%)]
          blur-3xl
          animate-aurora
        "
      />
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          bottom-[-20%]
          right-[-10%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[radial-gradient(circle,rgba(200,16,46,0.25),transparent_70%)]
          blur-3xl
          animate-aurora
        "
        style={{ animationDelay: "5s" }}
      />

      {/* BACKGROUND GRID */}
      <motion.div
        className="
          absolute
          inset-0
          bg-[linear-gradient(#F0F6FC_1px,transparent_1px),linear-gradient(90deg,#F0F6FC_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />

      <div
        className="
          relative
          z-10
          max-w-3xl
          mx-auto
          px-6
          min-h-[420px]
          flex
          items-center
          justify-center
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          {/* EYEBROW */}
          <motion.div
            variants={itemVariants}
            className="
              flex
              items-center
              justify-center
              gap-3
              uppercase
              tracking-[4px]
              text-xs
              font-semibold
              text-[#7DD3FC]
              mb-5
            "
          >
            <motion.span
              className="h-px bg-gradient-to-r from-transparent to-[#7DD3FC]"
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            Parlons de votre sécurité
            <motion.span
              className="h-px bg-gradient-to-l from-transparent to-[#7DD3FC]"
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* TITLE */}
          <motion.h2
            variants={itemVariants}
            className="
              font-bebas
              text-5xl
              md:text-7xl
              text-white
              leading-none
              tracking-wide
            "
          >
            Prêt à sécuriser
            <br />
            <span className="bg-gradient-to-r from-[#7DD3FC] to-white bg-clip-text text-transparent">
              votre activité ?
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="
              mt-6
              text-white/60
              leading-8
              max-w-xl
              mx-auto
            "
          >
            Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
            besoins en sécurité. Nos experts vous répondent sous 24h.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <Button onClick={openModal} size="lg">
              Demander un devis gratuit
            </Button>
          </motion.div>

          {/* PHONE */}
          <motion.div
            variants={itemVariants}
            className="
              mt-8
              flex
              justify-center
              items-center
              gap-3
              text-white/60
              text-sm
            "
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#C8102E]/40 animate-glow-pulse" />
              <PhoneIcon className="relative w-4 h-4 text-white" />
            </span>

            <span>
              Disponible 24h/24 —
              <strong className="text-white ml-2">
                00212662363866
              </strong>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}