export function ContactDetails() {

    return (
        <div className="h-screen w-full p-5 mx-auto mt-[45px]">
            <div className="flex flex-col items-center">
                <div className="text-4xl font-bold my-5 ">Contact Us</div>
                <div className="flex p-5 mx-auto w-[80%]">
                    <div className="w-[60%] flex flex-col justify-center space-y-3">
                        <p className="text-3xl font-bold text-green-300">Get in touch with us</p>
                        <p className="text-xl">Phone Number: <span>+234 706 522 2212</span></p>
                        <p className="text-xl">Email Address: <span>Gaboderin@yahoo.com</span></p>
                        <p className="text-xl">Address: <span>56 Kuboye Crescent, Imam Dauda, Surulere, Lagos.</span></p>

                    </div>
                    <div className="w-[40%]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0762697457228!2d3.3521110787196644!3d6.4829935356922945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91911d4e6e3d%3A0xaecb572adca30dcc!2sBenchristine%20smallchops!5e0!3m2!1sen!2sng!4v1717507580857!5m2!1sen!2sng" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}
