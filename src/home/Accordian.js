import React from 'react';
import './acord.css';

function Accordian() {
  return (
    <section className="bg">
      <div className="py-5">
        Let's Clear your Doubts!
      </div>
      <div className="accordion py-5">
        <div className="accordion-item shadow mb-2">
          <input type="checkbox" id="accordion-item-1" className="accordion-toggle" />
          <label htmlFor="accordion-item-1" className="accordion-title">
            <div className="accordion-text">What is the approval criteria to be a Mentor?</div>
            <span className="accordion-icon">+</span>
          </label>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis eleifend magna, ac ullamcorper nulla tempor sed. Aenean vel commodo lacus. Maecenas euismod mi nec fermentum lacinia. Fusce sit amet lorem vitae urna tincidunt convallis. Nullam eget consequat massa. Vestibulum id dui justo. Nunc vitae nunc non arcu consequat aliquet.</p>
          </div>
        </div>
        <div className="accordion-item shadow mb-2">
          <input type="checkbox" id="accordion-item-2" className="accordion-toggle" />
          <label htmlFor="accordion-item-2" className="accordion-title">
            <div className="accordion-text">How does Mentor Bridge work for Mentors?</div>
            <span className="accordion-icon">+</span>
          </label>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis eleifend magna, ac ullamcorper nulla tempor sed. Aenean vel commodo lacus. Maecenas euismod mi nec fermentum lacinia. Fusce sit amet lorem vitae urna tincidunt convallis. Nullam eget consequat massa. Vestibulum id dui justo. Nunc vitae nunc non arcu consequat aliquet.</p>
          </div>
        </div>
        <div className="accordion-item shadow mb-2">
          <input type="checkbox" id="accordion-item-3" className="accordion-toggle" />
          <label htmlFor="accordion-item-3" className="accordion-title">
            <div className="accordion-text">Can I charge fees of my choice?</div>
            <span className="accordion-icon">+</span>
          </label>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis eleifend magna, ac ullamcorper nulla tempor sed. Aenean vel commodo lacus. Maecenas euismod mi nec fermentum lacinia. Fusce sit amet lorem vitae urna tincidunt convallis. Nullam eget consequat massa. Vestibulum id dui justo. Nunc vitae nunc non arcu consequat aliquet.</p>
          </div>
        </div>
        <div className="accordion-item shadow mb-2">
          <input type="checkbox" id="accordion-item-4" className="accordion-toggle" />
          <label htmlFor="accordion-item-4" className="accordion-title">
            <div className="accordion-text">Can I get guidance on how to be a mentor?</div>
            <span className="accordion-icon">+</span>
          </label>
          <div className="accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis eleifend magna, ac ullamcorper nulla tempor sed. Aenean vel commodo lacus. Maecenas euismod mi nec fermentum lacinia. Fusce sit amet lorem vitae urna tincidunt convallis. Nullam eget consequat massa. Vestibulum id dui justo. Nunc vitae nunc non arcu consequat aliquet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordian;
