import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext";

const UserProfile = () => {
  const navigate = useNavigate();
  const { adminInfo } = useContext(AuthContext);

  return (
    <>
      {adminInfo.role === "user" ? (
        <div className="flex min-h-screen">
          <div className="flex-1 bg-gray-100 p-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center space-x-6 mb-8">
                <img
                  className="w-20 h-20 rounded-full border-4 border-blue-500"
                  src={adminInfo.userImage}
                  alt="Admin Profile"
                />
                <div>
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {adminInfo.username}
                  </h3>
                  <p className="text-lg text-gray-500">{adminInfo.role}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Email:</p>
                  <p className="text-gray-600">{adminInfo.email}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Role:</p>
                  <p className="text-gray-600"> {adminInfo.role} </p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Joined:</p>
                  <p className="text-gray-600"> {adminInfo.created_at} </p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Link
                  to="/editProfile"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default UserProfile;
