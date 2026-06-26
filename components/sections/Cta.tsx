// "use client";

// import Button from "@/components/ui/Button";

// import { PhoneIcon } from "@/components/icons";

// import { motion, Variants } from "framer-motion";

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

// export default function CTA() {
//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-dark text-center overflow-hidden"
//     >
//       {/* BACKGROUND */}

//       <motion.div
//         className="absolute inset-0 bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)] bg-[size:48px_48px]"
//         variants={gridVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       />

//       {/* CONTENT */}

//       <motion.div
//         className="relative max-w-3xl mx-auto px-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.h2
//           className="font-bebas text-5xl md:text-7xl text-navy leading-none tracking-wide"
//           variants={itemVariants}
//         >
//           Prêt à sécuriser
//           <br />
//           votre activité ?
//         </motion.h2>

//         <motion.p
//           className="mt-6 text-white/60 text-base leading-8 max-w-xl mx-auto"
//           variants={itemVariants}
//         >
//           Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
//           besoins en sécurité. Nos experts vous répondent sous 24h.
//         </motion.p>

//         <motion.div
//           className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//           variants={itemVariants}
//         >
//           <Button>Demander un devis gratuit</Button>

//           <Button variant="outline">Nous appeler</Button>
//         </motion.div>

//         <motion.div
//           className="mt-8 flex justify-center items-center gap-3 text-white/60 text-sm"
//           variants={itemVariants}
//         >
//           <PhoneIcon className="w-5 h-5 text-red" />

//           <span>
//             Disponible 24h/24 —
//             <strong className="text-white text-lg ml-2">
//               +212 5 22 41 68 68
//             </strong>
//           </span>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

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
//     scale: 0.95,
//     y: 30,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,

//     transition: {
//       duration: 0.4,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     y: 30,
//   },
// };

// export default function CTA() {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-dark text-center overflow-hidden"
//     >
//       {/* BACKGROUND */}

//       <motion.div
//         className="absolute inset-0 bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)] bg-[size:48px_48px]"
//         variants={gridVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       />

//       <motion.div
//         className="relative max-w-3xl mx-auto px-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {!showForm && (
//           <>
//             <motion.h2
//               className="font-bebas text-5xl md:text-7xl text-navy leading-none tracking-wide"
//               variants={itemVariants}
//             >
//               Prêt à sécuriser
//               <br />
//               votre activité ?
//             </motion.h2>

//             <motion.p
//               className="mt-6 text-white/60 text-base leading-8 max-w-xl mx-auto"
//               variants={itemVariants}
//             >
//               Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos
//               besoins en sécurité. Nos experts vous répondent sous 24h.
//             </motion.p>

//             <motion.div
//               className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//               variants={itemVariants}
//             >
//               <Button onClick={() => setShowForm(true)} className="...">
//                 Demander un devis gratuit
//               </Button>

//               <Button variant="outline">Nous appeler</Button>
//             </motion.div>

//             <motion.div
//               className="mt-8 flex justify-center items-center gap-3 text-white/60 text-sm"
//               variants={itemVariants}
//             >
//               <PhoneIcon className="w-5 h-5 text-red" />

//               <span>
//                 Disponible 24h/24 —
//                 <strong className="text-white text-lg ml-2">
//                   +212 5 22 41 68 68
//                 </strong>
//               </span>
//             </motion.div>
//           </>
//         )}

//         <AnimatePresence>
//           {showForm && (
//             <motion.div
//               className="bg-white/5 border border-white/10 p-8 text-left"
//               variants={formVariants}
//               initial="hidden"
//               animate="show"
//               exit="exit"
//             >
//               <h3 className="font-bebas text-4xl text-white mb-6">
//                 Demande de devis
//               </h3>

//               <form className="space-y-4">
//                 <input
//                   className="w-full bg-transparent border border-white/20 p-4 text-white outline-none"
//                   placeholder="Nom complet"
//                 />

//                 <input
//                   className="w-full bg-transparent border border-white/20 p-4 text-white outline-none"
//                   placeholder="Email"
//                   type="email"
//                 />

//                 <input
//                   className="w-full bg-transparent border border-white/20 p-4 text-white outline-none"
//                   placeholder="Téléphone"
//                 />

//                 <textarea
//                   className="w-full bg-transparent border border-white/20 p-4 text-white outline-none min-h-[120px]"
//                   placeholder="Décrivez votre besoin en sécurité"
//                 />

//                 <div className="flex gap-4 pt-3">
//                   <Button>Envoyer la demande</Button>

//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="text-white/60 text-sm"
//                   >
//                     Annuler
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// }

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

// const formVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.95,
//     y: 30,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,
//     y: 0,

//     transition: {
//       duration: 0.4,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },

//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     y: 30,
//   },
// };

// const successVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.9,
//   },

//   show: {
//     opacity: 1,
//     scale: 1,

//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// export default function CTA() {
//   const [showForm, setShowForm] = useState(false);

//   const [success, setSuccess] = useState(false);

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     // later: send to Resend API here

//     setSuccess(true);

//     setShowForm(false);

//     setTimeout(() => {
//       setSuccess(false);
//     }, 3000);
//   }

//   return (
//     <section
//       id="contact"
//       className="relative py-24 bg-dark text-center overflow-hidden"
//     >
//       <motion.div
//         className="absolute inset-0 bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)] bg-[size:48px_48px]"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.1 }}
//         viewport={{ once: true }}
//       />

//       <div className="relative max-w-3xl mx-auto px-6">
//         <AnimatePresence mode="wait">
//           {/* CTA */}

//           {!showForm && !success && (
//             <motion.div
//               key="cta"
//               variants={containerVariants}
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//             >
//               <motion.h2
//                 className="font-bebas text-5xl md:text-7xl text-navy leading-none tracking-wide"
//                 variants={itemVariants}
//               >
//                 Prêt à sécuriser
//                 <br />
//                 votre activité ?
//               </motion.h2>

//               <motion.p
//                 className="mt-6 text-white/60 leading-8 max-w-xl mx-auto"
//                 variants={itemVariants}
//               >
//                 Contactez-nous dès aujourd'hui pour une évaluation gratuite de
//                 vos besoins en sécurité.
//               </motion.p>

//               <motion.div
//                 className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//                 variants={itemVariants}
//               >
//                 <Button onClick={() => setShowForm(true)}>
//                   Demander un devis gratuit
//                 </Button>

//                 <Button variant="outline">Nous appeler</Button>
//               </motion.div>

//               <motion.div
//                 className="mt-8 flex justify-center items-center gap-3 text-white/60"
//                 variants={itemVariants}
//               >
//                 <PhoneIcon className="w-5 h-5 text-red" />

//                 <span>
//                   Disponible 24h/24 —
//                   <strong className="text-white ml-2">
//                     +212 5 22 41 68 68
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
//               className="bg-white/5 border border-white/10 p-8 text-left"
//             >
//               <h3 className="font-bebas text-4xl text-white mb-6">
//                 Demande de devis
//               </h3>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   required
//                   className="w-full bg-transparent border border-white/20 p-4 text-white"
//                   placeholder="Nom complet"
//                 />

//                 <input
//                   required
//                   type="email"
//                   className="w-full bg-transparent border border-white/20 p-4 text-white"
//                   placeholder="Email"
//                 />

//                 <input
//                   required
//                   className="w-full bg-transparent border border-white/20 p-4 text-white"
//                   placeholder="Téléphone"
//                 />

//                 <textarea
//                   required
//                   className="w-full bg-transparent border border-white/20 p-4 text-white min-h-[120px]"
//                   placeholder="Votre besoin"
//                 />

//                 <div className="flex gap-4 pt-4">
//                   <Button type="submit">Envoyer</Button>

//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="text-white/60"
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
//               className="py-16"
//             >
//               <h3 className="font-bebas text-5xl text-white">
//                 Demande envoyée ✓
//               </h3>

//               <p className="mt-4 text-white/60">
//                 Notre équipe vous répondra sous 24h.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import { PhoneIcon } from "@/components/icons";

import { AnimatePresence, motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

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
  hidden: {
    opacity: 0,
    scale: 1.1,
  },

  show: {
    opacity: 0.1,
    scale: 1,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const formVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 30,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 0.96,
    y: -20,

    transition: {
      duration: 0.3,
    },
  },
};

const successVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,

    transition: {
      duration: 0.3,
    },
  },
};

export default function CTA() {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      console.log(data);
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      setShowForm(false);
  
      setTimeout(() => {
        setSuccess(true);
      }, 250);
  
      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    } catch (error) {
      console.error(error);
    }
  }

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   // later:
  //   // send data to API / Resend

  //   setShowForm(false);

  //   setTimeout(() => {
  //     setSuccess(true);
  //   }, 250);

  //   setTimeout(() => {
  //     setSuccess(false);
  //   }, 3500);
  // }

  return (
    <section
      id="contact"
      className="
        relative
        py-24
        bg-dark
        text-center
        overflow-hidden
      "
    >
      {/* BACKGROUND */}

      <motion.div
        className="
          absolute
          inset-0
          bg-[linear-gradient(#F4F1E8_1px,transparent_1px),linear-gradient(90deg,#F4F1E8_1px,transparent_1px)]
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
          max-w-3xl
          mx-auto
          px-6
          h-[420px]
          flex
          items-center
          justify-center
        "
      >
        <AnimatePresence mode="wait">
          {/* CTA */}

          {!showForm && !success && (
            <motion.div
              key="cta"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full"
            >
              <motion.h2
                className="
                  font-bebas
                  text-5xl
                  md:text-7xl
                  text-navy
                  leading-none
                  tracking-wide
                "
                variants={itemVariants}
              >
                Prêt à sécuriser
                <br />
                votre activité ?
              </motion.h2>

              <motion.p
                className="
                  mt-6
                  text-white/60
                  leading-8
                  max-w-xl
                  mx-auto
                "
                variants={itemVariants}
              >
                Contactez-nous dès aujourd'hui pour une évaluation gratuite de
                vos besoins en sécurité. Nos experts vous répondent sous 24h.
              </motion.p>

              <motion.div
                className="
                  mt-10
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  gap-4
                "
                variants={itemVariants}
              >
                <Button onClick={() => setShowForm(true)}>
                  Demander un devis gratuit
                </Button>

                {/* <Button variant="outline">Nous appeler</Button> */}
              </motion.div>

              <motion.div
                className="
                  mt-8
                  flex
                  justify-center
                  items-center
                  gap-3
                  text-white/60
                  text-sm
                "
                variants={itemVariants}
              >
                <PhoneIcon className="w-5 h-5 text-red" />

                <span>
                  Disponible 24h/24 —
                  <strong className="text-white ml-2">
                    00212661370673 / 00212661187105
                  </strong>
                </span>
              </motion.div>
            </motion.div>
          )}

          {/* FORM */}

          {showForm && (
            <motion.div
              key="form"
              variants={formVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                relative
                w-full
                bg-[#1E1E1C]
                border
                border-white/10
                p-8
                text-left
                shadow-2xl
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-1
                  bg-red
                "
              />

              <h3
                className="
                  font-bebas
                  text-4xl
                  text-white
                  mb-6
                "
              >
                Demande de devis
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nom complet"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-white/20
                    p-4
                    text-white
                    outline-none
                  "
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-white/20
                    p-4
                    text-white
                    outline-none
                  "
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Téléphone"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-white/20
                    p-4
                    text-white
                    outline-none
                  "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre besoin"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-white/20
                    p-4
                    text-white
                    outline-none
                    min-h-[120px]
                  "
                />

                <div className="flex gap-4 pt-4">
                  <Button type="submit">Envoyer</Button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="
                      text-white/60
                      text-sm
                    "
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* SUCCESS */}

          {success && (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="
                min-h-[350px]
                flex
                flex-col
                justify-center
                items-center
              "
            >
              <h3
                className="
                  font-bebas
                  text-5xl
                  text-white
                "
              >
                Demande envoyée ✓
              </h3>

              <p
                className="
                  mt-4
                  text-white/60
                "
              >
                Notre équipe vous répondra sous 24h.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
