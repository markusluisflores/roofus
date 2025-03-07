"use client";

import NavBar from "@/components/nav";
import { useEffect, useState } from "react";
import DashboardCard from "@/components/dashboard-card";
import { useUserAuth } from "@/_utils/auth-context";
import PetForm from "@/components/pet-form-modal";
import DashboardPetCard from "@/components/dashboard-pet-card";
import DeletePetForm from "@/components/pet-delete-modal";
import AdoptionFormCard from "@/components/adoption-form-card";
import AdoptionForm from "@/components/form-modal";
import DeleteAdoptionForm from "@/components/form-delete-modal";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Dashboard() {
  const { user } = useUserAuth();
  const [adoptionForms, setAdoptionForms] = useState([]);
  const [editAdoptionForm, setEditAdoptionForm] = useState(false);
  const [adoptionformInfo, setAdoptionFormInfo] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteAdoption, setShowDeleteAdoption] = useState(false);
  const [petList, setPetList] = useState([]);
  const [openType, setOpenType] = useState('');
  const [currentPetId, setCurrentPetId] = useState('');
  const [currentFormInfo, setCurrentFormInfo] = useState({});
  const [refresh, setRefresh] = useState(0);

  // Temporary, not sure how we will implement this yet
  // Change this to "customer" if you want to render the other dashboard
  const [userRole, setUserRole] = useState("");

  const openForm = (openTypeParam, petId) => {
    setOpenType(openTypeParam);
    setCurrentPetId(petId);
    setShowForm(true);
  };
  const closeForm = () => setShowForm(false);

  const openDeleteForm = (petId) => {
    setCurrentPetId(petId);
    setShowDelete(true);
  };
  const closeDeleteForm = () => setShowDelete(false);

  const openDeleteAdoption = (formId, displayName, dateSubmitted, petName) => {
    setCurrentFormInfo({
      formId: formId,
      displayName: displayName,
      dateSubmitted: dateSubmitted,
      petName: petName
    });
    setShowDeleteAdoption(true);
  }
  const closeDeleteAdoption = () => setShowDeleteAdoption(false);

  const handleEditAdoptionForm = (petId, petName, formId) => {
    setAdoptionFormInfo({
      petId: petId,
      petName: petName,
      formId: formId
    });
    setEditAdoptionForm((prev) => !prev);
  };

  const handleCloseEditAdoptionForm = () => {
    setEditAdoptionForm((prev) => !prev);
    setRefresh((prev) => prev + 1);
  };



  async function getAllPets() {
    try {
      const response = await fetch("api/pets");
      const data = await response.json();
      setPetList(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllForms() {
    if (user) {
      try {
        const response = await fetch('api/admins');
        const data = await response.json();
        if (response.ok) {
          const formsResponse = await fetch('api/forms');
          let formsData = await formsResponse.json();

          const matchedAdmin = data.find((admin) => admin.email == user.email);
          if (matchedAdmin) {
            setUserRole("admin");
          }
          else {
            setUserRole("user");
            formsData = formsData.filter((form) => form.userEmail == user.email);
          }
          setAdoptionForms(formsData);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getAllForms();
    getAllPets();
  }, [refresh, user]);

  return (
    <main>
      <NavBar currentPage="Dashboard" />
      <div className="flex flex-col flex-1 justify-center w-screen items-center">
        {user ? (
          <>
            {
              editAdoptionForm &&
              <AdoptionForm
                onClose={handleCloseEditAdoptionForm}
                petId={adoptionformInfo.petId}
                petName={adoptionformInfo.petName}
                formType={"Edit"}
                formId={adoptionformInfo.formId}
              />
            }
            {
              showDeleteAdoption &&
              <DeleteAdoptionForm
                closeForm={closeDeleteAdoption}
                formInfo={currentFormInfo}
                setRefresh={setRefresh}
              />
            }
            {userRole === "admin" &&
              (
                <>
                  {/* admin dashboard */}
                  {
                    showForm &&
                    <PetForm
                      closeForm={closeForm}
                      openType={openType}
                      petId={currentPetId}
                      setRefresh={setRefresh}
                    />
                  }
                  {
                    showDelete &&
                    <DeletePetForm
                      closeForm={closeDeleteForm}
                      petId={currentPetId}
                      setRefresh={setRefresh}
                    />
                  }
                  <div className="relative bg-cover bg-center px-2">
                    <h2
                      className={`${roboto.className} text-gray-800 text-3xl self-start text-center md:text-left max-w-[1200px] font-bold pt-8 pb-4 underline underline-offset-4`}
                    >
                      Edit Data
                    </h2>
                    <div className="flex flex-1 flex-wrap justify-center md:justify-normal w-full max-w-[1496px] gap-4 pt-4">
                      <DashboardCard
                        title="Add Pet"
                        icon="/assets/dashboard/plus.png"
                        openForm={openForm}
                      />
                      {petList.map((pet) => (
                        <DashboardPetCard
                          key={pet.id}
                          name={pet.name}
                          petId={pet.id}
                          photo={pet.img}
                          openForm={openForm}
                          openDeleteForm={openDeleteForm}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )
            }
            <div className="relative bg-cover bg-center px-2 py-8 max-h-[540px]">
              <h2
                className={`${roboto.className} text-gray-800 text-3xl self-start text-center md:text-left max-w-[1200px] font-bold pt-8 pb-8 underline underline-offset-4`}
              >
                Submitted Adoption Forms
              </h2>
              <div className="flex flex-1 flex-wrap justify-center md:justify-normal w-full max-w-[1496px] gap-4 pt-4 pb-8">
                {adoptionForms.length > 0 ? (
                  adoptionForms.map((form) => (
                    <AdoptionFormCard
                      key={form.id}
                      form={form}
                      handleEditAdoptionForm={handleEditAdoptionForm}
                      openDelete={openDeleteAdoption}
                    />
                  ))
                ) : (
                  <p>No forms submitted yet.</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="relative bg-cover bg-center px-8 py-16">
            <h2 className="text-2xl text-center font-bold mt-8 text-black">
              Please Login to access Dashboard
            </h2>
          </div>
        )}
      </div>
    </main >
  );
}
