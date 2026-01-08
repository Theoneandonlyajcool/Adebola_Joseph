import { Button } from "@/components/ui/button";
interface ProdModalProps {
  closeModal: (value: boolean) => void;
  link?: string;
}

const ProdModal = ({ closeModal, link }: ProdModalProps) => {
  return (
    <div className="bg-black/60 shadow-2xl shadow-gray-900 backdrop-blur-xs fixed w-full h-screen top-0 z-1000 flex justify-center items-center text-white p-4">
      <div className="bg-white flex justify-center items-center text-gray-900 w-[98%] h-[60%] md:w-[50%] lg:max-w-[40%] md:max-w-7xl md:h-[70%] lg:h-[60%] rounded-3xl">
        <div className="w-full max-w-[90%] h-full text-center flex justify-center items-center flex-col">
          <h1 className="text-xl md:text-2xl  2xl:text-3xl font-bold">
            This project is currently under production <br /> as changes haven't
            been deployed yet.
          </h1>

          <p className="mt-4">Do you still wish to continue ?</p>
          <div>
            <Button
              onClick={() => window.open(link, "_blank")}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-6 rounded-md mt-6 md:mt-8 2xl:mt-10"
            >
              Yes
            </Button>
            <Button
              onClick={() => closeModal(false)}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-gray-100 font-bold py-2 px-6 rounded-md mt-6 md:mt-8 2xl:mt-10 ml-4"
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdModal;
