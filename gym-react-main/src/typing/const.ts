export enum SelectedPage {
  Home = 'inicio',
  Benefits = 'nosotros',
  OurClasses = 'eventos',
  ContactUs = 'contactanos'
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: string
}
