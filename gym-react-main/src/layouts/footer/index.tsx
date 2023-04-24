import Logo from '@/assets/AbstractWaves.png'

const Footer = () => {
  return (
    <footer className="bg-blue-300 py-14">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Est quos.
          </p>
          <p>&copy; Horacio Araiza Gonzalez All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Mus</p>
          <p className="my-5">Etm</p>
          <p>Uls</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Ts</p>
          <p>(+52) 572-0535 x4776</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
