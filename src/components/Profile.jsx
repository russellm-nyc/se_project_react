import SideBar from "../components/SideBar";
import ClothesSection from "../components/ClothesSection";
import "../blocks/Profile.css";

function Profile({ clothingItems, onCardClick, onAddItemClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddItemClick={onAddItemClick}
      />
    </div>
  );
}

export default Profile;
