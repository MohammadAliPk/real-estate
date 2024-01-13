import React from "react";

// styles
import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";
import { ProfileData } from "@/template/AddProfilePage";

interface TextInputProps {
  title: string;
  name: string;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  textarea?: boolean;
}

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}: TextInputProps) {
  const changeHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          name={name}
          //   @ts-ignore
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          //@ts-ignore
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
