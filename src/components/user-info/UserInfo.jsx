import "./userinfo.css";
import { useState } from "react";

const UserInfo = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleSaveContacts = (e) => {
        e.preventDefault();
        const contacts = [
            e.target.contact1.value,
            e.target.contact2.value,
            e.target.contact3.value,
            e.target.contact4.value,
            e.target.contact5.value
        ].filter(contact => contact.trim() !== ""); // Remove empty fields
        
        localStorage.setItem("emergencyContacts", JSON.stringify(contacts));
        console.log("Contacts Saved:", contacts);
        alert("Emergency contacts saved successfully!");
    };

    return (
        <div className='userinfo'>
            <div className="item">
                <h2>Enter Your Information</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Full Name" name="fullName" />
                    <input type="text" placeholder="Phone Number" name="phone" />
                    <input type="text" placeholder="Address" name="address" />
                    <button type="submit">Save Info</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Emergency Contacts</h2>
                <form onSubmit={handleSaveContacts}>
                    <input type="text" placeholder="Contact 1" name="contact1" />
                    <input type="text" placeholder="Contact 2" name="contact2" />
                    <input type="text" placeholder="Contact 3" name="contact3" />
                    <input type="text" placeholder="Contact 4" name="contact4" />
                    <input type="text" placeholder="Contact 5" name="contact5" />
                    <button type="submit">Save Contacts</button>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;
