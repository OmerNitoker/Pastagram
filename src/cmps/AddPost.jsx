
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export function AddPost({ isModalOpen, onAddPost, onCloseModal }) {
    //   let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }


    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={isModalOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={onCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

                <section className="add-modal">
                    <header className="modal-header flex space-between">
                        <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
                        <span>Create new post</span>
                        <a className='share-btn'>Share</a>
                    </header>
                    <div className="create-post-container flex space-between">
                        <section className="img-section">
                            <div className="upload-preview flex column">
                                <label for="imgUpload">Upload Image</label>
                                <input type="file" accept="img/*" id="imgUpload"></input>
                            </div>
                        </section>
                        <section className="post-info flex column">
                            <div className="post-user-info flex">
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
                                <span>Muki Goldstein</span>
                            </div>
                            <form>
                                <textarea name="txt" id="txt" placeholder='Write a caption...'></textarea>
                            </form>
                        </section>
                    </div>
                    {/* <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form> */}
                </section>
            </Modal>
        </div>
    );
}
