import { useState, useEffect } from "react";
import { X, User, BookOpen, GraduationCap, Calendar, Lock, ChevronRight, Eye } from "lucide-react";
import ProfileDetailsModal from "./modals/ProfileDetailsModal";
import GeneralInfoModal from "./modals/GeneralInfoModal";
import VolunteerInfoModal from "./modals/VolunteerInfoModal";
import SubjectsModal from "./modals/SubjectsModal";
import ClassesModal from "./modals/ClassesModal";
import AvailabilityModal from "./modals/AvailabilityModal";
import PasswordModal from "./modals/PasswordModal";

function getInitials(name) {
  if (!name) return "?";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function ProfileSidebar({ open, onClose }) {
  const [profile, setProfile] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/volunteers/my-profile/full", {
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) setProfile(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (open) fetchProfile();
  }, [open]);

  const menuItems = [
    { key: "details", icon: <Eye size={16} />, label: "View Profile Details" },
    { key: "general", icon: <User size={16} />, label: "Edit General Info" },
    { key: "volunteer", icon: <GraduationCap size={16} />, label: "Edit Volunteer Info" },
    { key: "subjects", icon: <BookOpen size={16} />, label: "Manage Subjects" },
    { key: "classes", icon: <GraduationCap size={16} />, label: "Manage Classes" },
    { key: "availability", icon: <Calendar size={16} />, label: "Manage Availability" },
    { key: "password", icon: <Lock size={16} />, label: "Change Password" },
  ];

  return (
    <>
      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">My Profile</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <X size={18} />
          </button>
        </div>

        {/* PROFILE INFO */}
        {profile && (
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm flex-shrink-0">
              {getInitials(profile.full_name)}
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">{profile.full_name}</p>
              <p className="text-xs text-gray-500">{profile.email}</p>
            </div>
          </div>
        )}

        {/* MENU */}
        <div className="py-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveModal(item.key)}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition text-left"
            >
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-gray-400">{item.icon}</span>
                {item.label}
              </div>
              <ChevronRight size={15} className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>

      {/* MODALS */}
      {activeModal === "details" && (
        <ProfileDetailsModal profile={profile} onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "general" && (
        <GeneralInfoModal
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchProfile}
        />
      )}
      {activeModal === "volunteer" && (
        <VolunteerInfoModal
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchProfile}
        />
      )}
      {activeModal === "subjects" && (
        <SubjectsModal
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchProfile}
        />
      )}
      {activeModal === "classes" && (
        <ClassesModal
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchProfile}
        />
      )}
      {activeModal === "availability" && (
        <AvailabilityModal
          profile={profile}
          onClose={() => setActiveModal(null)}
          onSuccess={fetchProfile}
        />
      )}
      {activeModal === "password" && (
        <PasswordModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}