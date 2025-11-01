import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <motion.div
        className="rounded-2xl shadow-lg overflow-hidden bg-white bg-gray-900 transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        whileHover={{ y: -5 }}
        onClick={() => window.open(link, "_blank")}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
