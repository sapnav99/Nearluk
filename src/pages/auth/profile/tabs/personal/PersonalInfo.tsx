import { useSelector } from "react-redux";
import { useState } from "react";
import "./PersonalInfo.css";
import Recent from "./Recent";
import emails from "../../../../../assets/images/email 1.png";
import facebook from "../../../../../assets/images/facebook 1.png";
import instagram from "../../../../../assets/images/instagram 1.png";
import linkedin from "../../../../../assets/images/linkedin 1.png";
import location from "../../../../../assets/images/location 1.png";
import check from "../../../../../assets/images/Mask group.png";
import edit from "../../../../../assets/images/Mode edit.png";
import phone from "../../../../../assets/images/phone-call 1.png";
import twitter from "../../../../../assets/images/twitter 1.png";
import youtube from "../../../../../assets/images/youtube 1.png";
import CommonInput from "../../../../../components/common/input/CommonInput";
import CommonButton from "../../../../../components/common/button/CommonButton";

const PersonalInfo = () => {
  const userData = useSelector((state: any) => state.loginReducer.user);
  const [editingFields, setEditingFields] = useState({
    location: "",
    facebookId: "",
    instaId: "",
    twitterId: "",
    linkedinId: "",
    youtubeChannel: "",
  });
  const [editedFields, setEditedFields] = useState({
    location: "",
    facebookId: "",
    instaId: "",
    twitterId: "",
    linkedinId: "",
    youtubeChannel: "",
  });

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleEdit = (field: string) => {
    console.log("edit clicked");
    setEditingFields({
      ...editingFields,
      [field]: true,
    });

    setEditedFields({
      ...editedFields,
      [field]: "",
    });
    console.log("edited");
  };

  const handleSave = () => {
    setEditingFields({
      location: "",
      facebookId: "",
      instaId: "",
      twitterId: "",
      linkedinId: "",
      youtubeChannel: "",
    });
  };
  const handleCancel = () => {
    setEditingFields({
      location: "",
      facebookId: "",
      instaId: "",
      twitterId: "",
      linkedinId: "",
      youtubeChannel: "",
    });
  };

  return (
    <div>
      <label>Contact Information</label>
      <div className="category-inner">
        <ul className="category-inner-card">
          <div className="category-card">
            <img src={phone} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Mobile Number: <span>{userData.user.mobile_no}</span>
              </label>
            </div>
          </div>

          <div className="category-card">
            <img src={emails} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Email: <span>{userData.user.email}</span>
              </label>
            </div>
          </div>
          <div className="category-card">
            <img src={location} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Location:
                <span>
                  {editingFields.location ? (
                    <div className="d-flex">
                      <CommonInput
                        style={{
                          border: "solid 1px #03B6C3",
                          borderRadius: "10px",
                          height: "30px",
                        }}
                        type="text"
                        value={editedFields.location}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            location: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleCancel}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.location}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.location && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("location")}
              />
            )}
          </div>
          <div className="category-card">
            <div className="info">
              <label style={{ color: "gray", paddingLeft: "20px" }}>
                Aadhaar No.: <span></span>
              </label>
            </div>

            <img
              src={check}
              className="check-icon"
              style={{ paddingLeft: "60px" }}
            />
          </div>
          <div className="category-card">
            <div className="info">
              <label style={{ color: "gray", paddingLeft: "20px" }}>
                Pan No.: <span></span>
              </label>
            </div>
            <img src={check} className="check-icon" />
          </div>
        </ul>
        {/* Social links */}
        <ul className="category-inner-card">
          <div className="category-card">
            <img src={facebook} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Facebook:
                <span>
                  {editingFields.facebookId ? (
                    <div className="d-flex">
                      <CommonInput
                      style={{
                        border: "solid 1px #03B6C3",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                        type="text"
                        value={editedFields.facebookId}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            facebookId: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleCancel}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.facebookId}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.facebookId && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("facebookId")}
              />
            )}
          </div>
          <div className="category-card">
            <img src={instagram} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Insta Id:
                <span>
                  {editingFields.instaId ? (
                    <div className="d-flex">
                      <CommonInput
                       style={{
                        border: "solid 1px #03B6C3",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                        type="text"
                        value={editedFields.instaId}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            instaId: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                         style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleCancel}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.instaId}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.instaId && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("instaId")}
              />
            )}
          </div>
          <div className="category-card">
            <img src={twitter} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Twitter Id:
                <span>
                  {editingFields.twitterId ? (
                    <div className="d-flex">
                      <CommonInput
                       style={{
                        border: "solid 1px #03B6C3",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                        placeholder="enter location"
                        type="text"
                        value={editedFields.twitterId}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            twitterId: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                       style={{
                        marginBottom: "15px",
                        marginLeft: "10px",
                        paddingInline: "20px",
                        paddingBlock:"5px",
                        paddingBottom: "6px",
                      }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingBlock:"5px",
                          paddingInline: "20px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleCancel}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.twitterId}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.twitterId && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("twitterId")}
              />
            )}
          </div>
          <div className="category-card">
            <img src={linkedin} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                LinkedIn Id:
                <span>
                  {editingFields.linkedinId ? (
                    <div className="d-flex">
                      <CommonInput
                       style={{
                        border: "solid 1px #03B6C3",
                        borderRadius: "10px",
                        height: "30px",
                      }}
                        type="text"
                        value={editedFields.linkedinId}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            linkedinId: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                       style={{
                        marginBottom: "15px",
                        marginLeft: "10px",
                        paddingInline: "20px",
                        paddingBlock:"5px",
                        paddingBottom: "6px",
                      }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                       style={{
                        marginBottom: "15px",
                        marginLeft: "10px",
                        paddingBlock:"5px",
                        paddingInline: "20px",
                        paddingBottom: "6px",
                      }}
                        onClick={handleCancel}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.linkedinId}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.linkedinId && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("linkedinId")}
              />
            )}
          </div>
          <div className="category-card">
            <img src={youtube} alt="" className="icon" />
            <div className="info">
              <label style={{ color: "gray", paddingTop: "10px" }}>
                Youtube Channel:
                <span>
                  {editingFields.youtubeChannel ? (
                    <div className="d-flex">
                      <CommonInput
                         style={{
                          border: "solid 1px #03B6C3",
                          borderRadius: "10px",
                          height: "30px",
                        }}
                        type="text"
                        value={editedFields.youtubeChannel}
                        onChange={(e) =>
                          setEditedFields({
                            ...editedFields,
                            youtubeChannel: e.target.value,
                          })
                        }
                      />

                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleSave}
                        label="Save"
                      />
                      <CommonButton
                        style={{
                          marginBottom: "15px",
                          marginLeft: "10px",
                          paddingInline: "20px",
                          paddingBlock:"5px",
                          paddingBottom: "6px",
                        }}
                        onClick={handleSave}
                        label="Cancel"
                      />
                    </div>
                  ) : (
                    <span>{editedFields.youtubeChannel}</span>
                  )}
                </span>
              </label>
            </div>
            {!editingFields.youtubeChannel && (
              <img
                src={edit}
                alt=""
                className="edit-icon"
                onClick={() => handleEdit("youtubeChannel")}
              />
            )}
          </div>
        </ul>
      </div>
      <Recent />
    </div>
  );
};

export default PersonalInfo;
