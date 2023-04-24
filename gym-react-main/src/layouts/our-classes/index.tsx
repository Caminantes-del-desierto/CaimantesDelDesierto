import filtro2 from '@/assets/filtro2.png'
import image4 from '@/assets/Circle_of_spam.svg'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/neural.webp'
import image7 from '@/assets/image7.png'
import banner1 from '@/assets/banner1.png'
import HText from '@/components/HText'
import { ClassType, SelectedPage } from '@/typing/const'
import { motion } from 'framer-motion'
import { FC } from 'react'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: 'An Automatic Framework for the Graph-based Representation of Coronary Arteries',
    image: filtro2
  },
  {
    name: 'Parallel Computing',
    image: image4
  },
  {
    name: 'Cryptocurrency forescating',
    image: image7
  },
  {
    name: 'Symposium on Colloid and Interface Science',
    image: banner1
  },
  {
    name: 'Fitness Recommender',
    description: 'Workout forescasting.',
    image: image5
  },
  {
    name: 'Neural Networks projects',
    description: 'From image segmentation to cluster analysis.',
    image: image6
  }
]

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses: FC<OurClassesProps> = ({ setSelectedPage }) => {
  return (
    <section id="eventos" className="w-full bg-blue-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="w-3/5">
            <HText>Projects</HText>
            <p className="py-5">
              Follow along if you are brave enough.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-5/6 mx-auto overflow-x-auto overflow-y-hidden">
          <ul className="w-2800px whitespace-nowrap flex gap-10 justify-between">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
