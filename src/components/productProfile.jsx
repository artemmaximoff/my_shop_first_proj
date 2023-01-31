import React from "react";
import { ProductProfileInfo } from "./productProfileInfo";
import { ProductProfileEditForm } from "./productprofileineditform";
import { useProuctProfile } from "../hooks/useProductProfile";




export const ProductProfile = () => {
    const { profile, error, editMode, setEditMode, editProfile } = useProuctProfile()


    return (
        <div className="container mx-auto max-w-3xl">
            {editMode
                ? <ProductProfileEditForm setEditMode={() => setEditMode()} profile={profile} editProfile={editProfile} />

                : <ProductProfileInfo profile={profile} error={error} setEditMode={setEditMode} />
            }


        </div>

    )
}