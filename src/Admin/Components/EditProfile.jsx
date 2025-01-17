// import React, { useContext, useState } from "react";
// import supabase from "../../lib/supabase";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../components/AuthContext";
// import { useNavigate } from "react-router-dom";

// const EditProfile = () => {
//   const navigate = useNavigate();
//   const { session } = useContext(AuthContext);
//   const Uid = session?.user?.id;

//   const [formData, setFormData] = useState({
//     userName: "",
//     imageUrl: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { data, error } = await supabase
//       .from("users")
//       .update({
//         username: formData.userName,
//         userImage: formData.imageUrl,
//       })
//       .eq("uid", Uid)
//       .select();
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(data);
//       toast.success(" Changes Updated!", {
//         position: "top-right",
//       });
//       navigate("/profile");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
//       <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Edit Profile
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* User Name */}
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="userName"
//               className="text-lg font-medium text-gray-700"
//             >
//               User Name
//             </label>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               value={formData.userName}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Profile Image */}
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="imageUrl"
//               className="text-lg font-medium text-gray-700"
//             >
//               Profile Image URL
//             </label>
//             <input
//               type="url"
//               id="imageUrl"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your profile image URL"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;




import React, { useContext, useState } from "react";
import supabase from "../../lib/supabase";
import toast from "react-hot-toast";
import { AuthContext } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const { session } = useContext(AuthContext);
  const Uid = session?.user?.id;

  const [formData, setFormData] = useState({
    userName: "",
    imageUrl: "",
    mobileNumber: "",
    github: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("users")
      .update({
        username: formData.userName,
        userImage: formData.imageUrl,
        mobileNumber: formData.mobileNumber,
        github: formData.github,
        facebook: formData.facebook,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
      })
      .eq("uid", Uid)
      .select();
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      toast.success("Changes Updated!", {
        position: "top-right",
      });
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-10 px-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center border-b pb-4">
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* User Information Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="userName"
                  className="text-lg font-medium text-gray-700"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="imageUrl"
                  className="text-lg font-medium text-gray-700"
                >
                  Profile Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your profile image URL"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobileNumber"
                  className="text-lg font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-700">Social Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="github"
                  className="text-lg font-medium text-gray-700"
                >
                  GitHub
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your GitHub profile URL"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="facebook"
                  className="text-lg font-medium text-gray-700"
                >
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Facebook profile URL"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="linkedin"
                  className="text-lg font-medium text-gray-700"
                >
                  LinkedIn
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your LinkedIn profile URL"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="twitter"
                  className="text-lg font-medium text-gray-700"
                >
                  Twitter
                </label>
                <input
                  type="url"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your Twitter profile URL"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-12 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
