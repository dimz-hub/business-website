function Services() {
    return (
        <div className="w-full h-full bg-green-200">
        <div className="mx-auto p-8 text-center">
            <h1 className="text-4xl font-bold mb-5">Our Services</h1>
            <div className="flex space-x-7 mb-5 justify-center">
            <div className="flex flex-col items-center justify-start w-1/4 bg-slate-50 p-6 rounded-xl">
            <div className="w-20 h-20 my-3 rounded-lg"><img src="./images/unnamed.jpg" alt="services" /></div>
            <p className="text-lg text-left">
            <h1 className="text-lg font-bold text-center">ISO 20000</h1>
                Business Platform Limited provides organizations with the resources and expertise they need to implement and maintain an ISO 20000-compliant service management system (SMS). Our range of services, including:
                <ul className="list-disc pl-5 mt-1">
                    <li>Training and certification</li>
                    <li>Process consulting</li>
                    <li>Implementation support</li>
                    <li>Ongoing monitoring and improvement</li>
                </ul>
            </p>
            </div>

            <div className="flex flex-col items-center justify-start w-1/4 bg-slate-50 p-6 rounded-xl">
            <div className="w-20 h-20 my-3 rounded-lg"><img src="./images/unnamed.jpg" alt="services" /></div>
            <p className="text-lg text-left">
            <h1 className="text-lg font-bold text-center">ITIL services</h1>
            Our ITIL services are IT services that are delivered in accordance with the Information Technology Infrastructure Library (ITIL) framework  through  a systematic approach to the delivery of IT services utilizing: 
            <ul className="list-disc pl-5 mt-1">
                    <li>Service strategy</li>
                    <li>Service design</li>
                    <li>Service transition</li>
                    <li>Service operation</li>
                    <li>Continual service improvement</li>
                </ul>
            </p>
            </div>

            <div className="flex flex-col items-center justify-start w-1/4 bg-slate-50 p-6 rounded-xl">
            <div className="w-20 h-20 my-3 rounded-lg"><img src="./images/unnamed.jpg" alt="services" /></div>
            <p className="text-lg text-left">
            <h1 className="text-lg font-bold text-center">Software Testing Services</h1>
            Our Software testing services are a broad range of services that help organizations to ensure the quality of their software. These services can include:
                <ul className="list-disc pl-5 mt-1">
                    <li>Functional testing</li>
                    <li>Performance testing</li>
                    <li>Security testing</li>
                    <li>Usability testing</li>
                    <li>Acceptance testing</li>
                </ul>
            </p>
            </div>

            </div>
            <div className="flex space-x-5 justify-center">

            <div className="flex flex-col items-center justify-start w-1/4 bg-slate-50 p-6 rounded-xl">
            <div className="w-20 h-20 my-3 rounded-lg"><img src="./images/unnamed.jpg" alt="services" /></div>
            <p className="text-lg text-left">
            <h1 className="text-lg font-bold text-center">Project Management Services</h1>
            With our In-house team of Project managers, we offer Project management services that help organizations to deliver projects successfully. These services can include:
                <ul className="list-disc pl-5 mt-1">
                    <li>Project planning</li>
                    <li>Project execution</li>
                    <li>Project monitoring and control</li>
                    <li>Project closure</li>
                </ul>
            </p>
            </div>

            <div className="flex flex-col items-center justify-start w-1/4 bg-slate-50 p-6 rounded-xl">
            <div className="w-20 h-20 my-3 rounded-lg"><img src="./images/unnamed.jpg" alt="services" /></div>
            <p className="text-lg text-left">
            <h1 className="text-lg font-bold text-center">Application Software Development Service</h1>
            Through our Application Software Development Service, we develop custom software applications using the flow of Business analysis; Design; Development; Testing; Deployment and Maintenance.
            </p>
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default Services
