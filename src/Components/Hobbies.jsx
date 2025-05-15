import React from 'react';
import { BookOpen, Mic, ChefHat, Camera, BrainCircuit, Sparkles } from 'lucide-react';

const hobbiesData = [
    {
        title: 'Reading Self-Development Books',
        description: 'Always seeking new ways to grow and lead better.',
        icon: <BookOpen className="w-8 h-8 text-teal-500" />,
        color: 'bg-teal-100/50',
    },
    {
        title: 'Public Speaking',
        description: 'I enjoy sharing ideas and inspiring others.',
        icon: <Mic className="w-8 h-8 text-emerald-500" />,
        color: 'bg-emerald-100/50',
    },
    {
        title: 'Exploring African Cuisine',
        description: 'Passionate about cooking and discovering flavors.',
        icon: <ChefHat className="w-8 h-8 text-orange-500" />,
        color: 'bg-orange-100/50',
    },
    {
        title: 'Photo & Video Editing',
        description: 'Bringing visuals to life through creative editing.',
        icon: <Camera className="w-8 h-8 text-purple-500" />,
        color: 'bg-purple-100/50',
    },
    {
        title: 'Creative Thinking',
        description: 'Coming up with ideas and new approaches.',
        icon: <BrainCircuit className="w-8 h-8 text-yellow-500" />,
        color: 'bg-yellow-100/50',
    },
    {
        title: 'Staying Curious',
        description: 'Asking questions freely and fearlessly.',
        icon: <Sparkles className="w-8 h-8 text-pink-500" />,
        color: 'bg-pink-100/50',
    },
];

function Hobbies() {
    return (
        <section id="hobbies" className="section-offset py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-teal-600">
                    My Hobbies & Interests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hobbiesData.map((hobby, index) => (
                        <div
                            key={index}
                            className={`
                rounded-xl p-4 transition-all duration-300
                flex items-center gap-4
                ${hobby.color}
                border-2 border-white/20
                shadow-md
                hover:shadow-lg hover:scale-[1.04]
              `}
                        >
                            <div className="rounded-full p-3 bg-white/20">{hobby.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{hobby.title}</h3>
                                <p className="text-gray-600 text-sm">{hobby.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hobbies;
