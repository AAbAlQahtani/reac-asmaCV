
let root = document.getElementById("root")
// let element = React.createElement("p",{
//     children: "asma",
//     className:"container"
// })
// ReactDOM.render(element,root)

let element = <div>
    <div>
        <h1 className="container">Asma AlQahtani CV</h1>

        <div>
            <h2>Experience:</h2>
            <p><strong>Software Quality Assurance</strong></p>
            <ul>
                <li>Analyzed requirements and acceptance criteria.</li>
                <li>Led review meetings to ensure team alignment.</li>
                <li>Designed and executed test cases collaboratively.</li>
                <li>Reported test execution results and findings.</li>
                <li>Tested large-scale client-server applications (web & mobile).</li>
                <li>Worked in Agile/Scrum development environments.</li>
            </ul>
        </div>

        <div>
            <h2>Education:</h2>
            <p><strong>M.Sc. Computer Science</strong> - King Saud University </p>
            <p><strong>B.Sc. Computer Sciences</strong> - Princess Norah University</p>
        </div>

        <div>
            <h2>Skills:</h2>
            <ul>
                <li>Manual Testing</li>
                <li>Bug Tracking</li>
                <li>Agile Methodologies</li>
                <li>Java & HTML& CSS & javascript</li>
                <li>Analytical and problem-solving</li>
                <li>Time management & Teamwork</li>
            </ul>
        </div>

        <div>
            <h2>Contact:</h2>
            <p>Email: asmaalqhtani123@gmail.com</p>
            <p>Phone: +966 501129115</p>
            <p>Location: Riyadh, Saudi Arabia</p>
        </div>

        <div>
            <h2>Languages:</h2>
            <ul>
                <li>Arabic (Native)</li>
                <li>English (Proficient)</li>
            </ul>
        </div>

        <div>
            <h2>Publication:</h2>
            <p>
                Alrassan, I., & Alqahtani, A. (2023). Detection of DDoS Attacks on Cloud
                Computing Environments Using Machine Learning Techniques. IEEE
                ICCNS2023, Valencia, Spain.
            </p>
        </div>

        <div>
            <h2>Award:</h2>
            <p>
                Third place in the Takaful Competition for Bachelor Graduation Projects,
                College of Computer Science, Princess Norah University
            </p>
        </div>
    </div>

</div>
ReactDOM.render(element, root)
