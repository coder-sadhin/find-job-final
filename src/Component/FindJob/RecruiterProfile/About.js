import React from 'react';
import { BiPencil } from 'react-icons/bi';

const About = () => {
    return (
        <div className='bg-base-content'>
            <div className='p-8 mt-3'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl my-3'>About</h2>

                    <label htmlFor="aboutModal" className='text-4xl ml-6'><BiPencil /></label>


                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="aboutModal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative bg-base-content">
                            <label htmlFor="aboutModal" className="btn btn-sm btn-circle absolute right-2 mr-2 mb-1">✕</label>
                            <h3 className="text-lg font-bold">Edit Profile</h3>
                            <div className="divider"></div>
                            <textarea

                                name="message"
                                rows="7"
                                placeholder="Your Message"
                                required

                                className="w-full p-6 bg-transparent border-2  resize-none text-white"
                            ></textarea>
                            <div className='flex justify-end mt-5'>
                                <button className="btn ml-2 border-white w-[120px] bg-blue-400 text-black rounded-2xl">save</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=''>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas dicta itaque vitae adipisci in omnis amet incidunt porro illo dolorum, sit necessitatibus rerum praesentium accusamus repellat sapiente, atque possimus. Eius, facere. Quibusdam porro quia odio a quas ad atque libero, adipisci iusto! Veniam nam aliquam accusamus voluptatum ducimus ipsum tenetur iusto eius, perspiciatis excepturi velit voluptatem itaque numquam, cum, temporibus nemo quas soluta exercitationem dolores. Saepe aspernatur unde molestiae praesentium at, aliquid rem distinctio assumenda reiciendis cumque voluptatibus deleniti fuga molestias dolore cum. Quas modi in odit commodi magnam tenetur aspernatur officia, quibusdam dignissimos id veritatis totam aperiam exercitationem alias unde ratione accusantium ipsum voluptatibus deserunt accusamus nihil ex aut. Ad vero nam ipsam quibusdam totam ratione dolorum? Maiores, accusamus ipsa accusantium facere blanditiis ipsum recusandae nisi molestiae esse autem voluptates minus iure inventore doloribus pariatur sed architecto adipisci consectetur libero ad sunt atque incidunt? At quaerat ab quibusdam?</p>
                    <p className='text-xl mt-4'>TOP SKILL</p>
                    <p>Expertise:
                        Html5, CSS3, Bootstrap5, Tailwind CSS,
                        React-Bootstrap, JavaScript, ES6, Rest API,
                        React.JS, React-Router, Firebase -Authentication,
                        Node.JS, Express.JS, MongoDB</p>
                    <p className='text-xl mt-4'>Tools</p>
                    <p>VS Code Editor, GitHub, Netlify, Figma, Vercel</p>
                    <p>Email: tom@gmail.com</p>
                    <p>WhatsApp: 0163564651</p>
                </div>
            </div>
        </div>
    );
};

export default About;