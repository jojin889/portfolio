const Mail = () => {
  return (
    <div
      className="flex flex-col text-center justify-center m-5 pt-6"
      id="contact"
    >
      <h4 className="mb-12 text-4xl">Me contacter</h4>
      <form
        className="flex flex-col text-center border-solid rounded-md w-[50%] mx-auto"
        autoComplete="off"
        action="https://formsubmit.co/jonathan.theron@gmx.fr"
        method="POST"
      >
        <div className="text-center bg-transparent flex flex-col">
          <input
            type="text"
            name="Nom"
            placeholder="Nom"
            required
            autoComplete="off"
            className="text-center bg-transparent m-3 border-b  rounded-md text-black"
          />
          <input
            type="text"
            name="Prenom"
            placeholder="Prénom"
            autoComplete="off"
            className="text-center bg-transparent m-3 border-b  rounded-md"
          />
          <input
            type="tel"
            name="Téléphone"
            placeholder="Téléphone"
            autoComplete="off"
            className="text-center bg-transparent m-3 border-b  rounded-md"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="text-center bg-transparent m-3 border-b  rounded-md"
            required
            autoComplete="off"
          />
        </div>

        <input type="hidden" name="_subject" value="Portfolio - Nouvel email" />

        <textarea
          rows="3"
          cols="200"
          name="Message"
          placeholder="Votre message ici"
          className="text-center bg-transparent m-3 border-b text-black rounded-md"
          required
          autoComplete="off"
          id="lol"
        />

        <button
          type="submit"
          className="flex my-2 mx-auto items-center justify-center box-shadow1 w-40 h-fit py-2 px-4 bg-[#d8d5d5] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[20px] text-black">Envoyer →</span>
        </button>
      </form>

      <div>
        <i class="far fa-envelope"></i>
        &nbsp; &nbsp; &nbsp;
        <span className="block mb-3">
          <img src="mail.png" className="text-white w-[5%] inline mr-5" />
          jonathan.theron@gmx.fr
        </span>
        <span className="">
          <img src="phone.png" className="text-white w-[5%] inline mr-4" />
          06 66 63 11 07
        </span>
        {/* <i className="fas fa-map-marker-alt"></i> &nbsp;23 Boulevard Ampère
        38230 Tignieu-Jameyzieu */}
        {/* <i className="fas fa-phone-alt"></i><span className="cursive"> &nbsp;06 66 63 11 07</span> */}
      </div>

      {/* <button className="w-[200px] mx-auto mt-20 mb-10"> */}
      <a
        className="w-[300px] mx-auto mt-20 mb-10 bg-red-50 text-black rounded-xl p-3"
        href="/cv_jonathan_theron.pdf"
        download
      >
        Télécharger mon cv
        {/* <Image src={cv} width={45} className="mx-auto my-5" /> */}
        <span classname="flex my-2 mx-auto items-center justify-center box-shadow1 w-40 h-fit py-2 px-4 bg-[#d8d5d5] rounded-[32px] gap-[12px]"></span>
      </a>
    </div>
  );
};

export default Mail;
