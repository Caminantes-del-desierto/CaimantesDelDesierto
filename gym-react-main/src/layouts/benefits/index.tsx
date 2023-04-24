import BenefitsPageGraphic from '@/assets/Stickers_Mesa de trabajo 1.png'
import ActionButton from '@/components/ActionButton'
import HText from '@/components/HText'
import { BenefitType, SelectedPage } from '@/typing/const'
import { motion } from 'framer-motion'
import { FC } from 'react'
import Benefit from './Benefit'

const benefits: Array<BenefitType> = [
  {
    icon: <div className="i-heroicons:home-modern-20-solid w-6 h-6" />,
    title: 'State of the Art Facilities',
    description:
      'Quis amet magn.'
  },
  {
    icon: <div className="i-heroicons:user-group-20-solid w-6 h-6" />,
    title: "100's of Diverse Classes",
    description:
      'Amet ut qui ani.'
  },
  {
    icon: <div className="i-heroicons:academic-cap-20-solid w-6 h-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Sap.'
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits: FC<BenefitsProps> = ({ setSelectedPage }) => {
  return (
    <section id="nosotros" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HText>More Than Just A Gym</HText>
          <p className="my-5 text-sm">
            Quas
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-1 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <HText>
                    Desarrollo web en apoyo al ambientalismo trabajando en conjunto con{' '}
                    <span className="text-green-500">Caminantes del desierto</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className="my-5">
      
                El Colectivo crea áreas verde dignas, seguras y naturales con plantas de la región, 
                donde se pueda enseñar a las nuevas generaciones los valores y educación necesaria para mantener los lugares silvestres 
                más naturales y con un impacto mínimo basado en los 7 principios de No Dejes Rastro; 
               
              </p>
              <p className="mb-5">
                Es también nuestro objetivo hacer un ejemplo de lo que la ciudadanía puede lograr cuando es proactiva y corresponsable porque creemos que tomar conciencia es 
                el primer paso para lograr un cambio de cultura.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:-z-1 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
