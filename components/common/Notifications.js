// import { motion } from "framer-motion";
import { useUiContext } from "../../contexts/UiContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Notifications = () => {
  const { isNotificationsOpen } = useUiContext();
  return (
    <>
      {isNotificationsOpen && (
        <motion.div
          className="dropdown absolute -left-24 z-20 top-full mt-3 p-2 !rounded-xl w-[320px] card card-shadow dark:shadow-none"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          {/*---------------------------------------- Notifications List------------------------------------- */}
          {Array.apply(null, { length: 5 }).map((_, i) => (
            <div
              className="flex space-x-3 p-2 border-b dark:border-hover-color  sm:cursor-pointer hover:bg-slate-100 dark:hover:bg-hover-color"
              key={i}
            >
              <div>
                <Image
                  src={"/whatsapp.png"}
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <h1 className="font-bold">Whatsapp</h1>
                <p className="text-sm">
                  Whatsapp just added a new gig.{" "}
                  <span className="text-primary">Check it out</span>
                </p>
                <span className="text-sm text-slate-500">12hrs ago</span>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Notifications;
