import { useState } from "react";
import { UserData, UserProps } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<UserProps> = ({}) => {
    const [isModalOpen, setModalOpen] = useState(false);
      const [post, setPost] = useState<UserData | null>(null);
    
    
      const handleAddPost = (newPost: UserData) => {
        setPost({ ...newPost, id: posts.length + 1 });
      };
    
    return (
    <div className="flex flex-col h-screen">

        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Account Creation</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">New User</button>
        </div>
         <div className="grid grid-cols-3 gap-2 ">
                  {
                    posts?.map(({ name, email, username, id }: UserProps, key: number) => (
                      <UserCard name={name} username={username} id={id} email={email} key={key} />
                    ))
                  }
        </div>
          {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
    )
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;