import React from 'react';
import './Content.css';

const Content = () => {
  return (
    <div className="Content mt-4">
      <span className="ms-5 hello">Hi Neha!</span>
      <div className="box m-5">
        <h2 className="welcome-box-title ms-5 mt-4">Welcome to Mentor Bridge</h2>
        <div className="border-bottom">
          <p className="welcome-box-subtitle ms-5 mt-2">Your Journey as a mentor begins here</p>
        </div>

        <div className="accord my-1">
          <div className="accord-item border-bottom py-3">
            <input type="checkbox" id="accord-1" className="accord-input" />
            <label htmlFor="accord-1" className="accord-label mx-4">
              Add availability <span className="arrow"></span>
            </label>

            <div className="accord-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna eu ullamcorper dignissim, velit
                ex consequat mi, eu gravida leo orci nec augue. In id metus tellus. Sed sollicitudin faucibus nisl, eget
                fermentum velit fermentum in. Vestibulum eu nunc eu massa tincidunt euismod. Sed ultricies tortor id
                lectus pulvinar, ut feugiat nunc bibendum. Mauris at dignissim lectus. Suspendisse at risus in purus
                laoreet viverra non vel ipsum. Quisque vitae efficitur urna.
              </p>
            </div>
          </div>
          <div className="accord-item border-bottom py-3">
            <input type="checkbox" id="accord-2" className="accord-input" />
            <label htmlFor="accord-2" className="accord-label mx-4">
              Complete your profile <span className="arrow"></span>
            </label>
            <div className="accord-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna eu ullamcorper dignissim, velit
                ex consequat mi, eu gravida leo orci nec augue. In id metus tellus. Sed sollicitudin faucibus nisl, eget
                fermentum velit fermentum in. Vestibulum eu nunc eu massa tincidunt euismod. Sed ultricies tortor id
                lectus pulvinar, ut feugiat nunc bibendum. Mauris at dignissim lectus. Suspendisse at risus in purus
                laoreet viverra non vel ipsum. Quisque vitae efficitur urna.
              </p>
            </div>
          </div>
          <div className="accord-item border-bottom py-3">
            <input type="checkbox" id="accord-3" className="accord-input" />
            <label htmlFor="accord-3" className="accord-label mx-4">
              Share a post <span className="arrow"></span>
            </label>
            <div className="accord-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna eu ullamcorper dignissim, velit
                ex consequat mi, eu gravida leo orci nec augue. In id metus tellus. Sed sollicitudin faucibus nisl, eget
                fermentum velit fermentum in. Vestibulum eu nunc eu massa tincidunt euismod. Sed ultricies tortor id
                lectus pulvinar, ut feugiat nunc bibendum. Mauris at dignissim lectus. Suspendisse at risus in purus
                laoreet viverra non vel ipsum. Quisque vitae efficitur urna.
              </p>
            </div>
          </div>
          <div className="accord-item py-3">
            <input type="checkbox" id="accord-4" className="accord-input" />
            <label htmlFor="accord-4" className="accord-label mx-4">
              Connect payout <span className="arrow"></span>
            </label>
            <div className="accord-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna eu ullamcorper dignissim, velit
                ex consequat mi, eu gravida leo orci nec augue. In id metus tellus. Sed sollicitudin faucibus nisl, eget
                fermentum velit fermentum in. Vestibulum eu nunc eu massa tincidunt euismod. Sed ultricies tortor id
                lectus pulvinar, ut feugiat nunc bibendum. Mauris at dignissim lectus. Suspendisse at risus in purus
                laoreet viverra non vel ipsum. Quisque vitae efficitur urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
