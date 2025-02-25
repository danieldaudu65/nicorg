import { bigLogo } from '@/assets';
import Image from 'next/image';
import React from 'react';

const OurStory = () => {
    return (
        <div className="p-6 relative">
            <Image src={bigLogo} className="absolute inset-0 left-1/2 transform -translate-x-1/2 z-0 opacity-1"
                alt="Big Logo"
                width={500}
                height={500} />
            <h2 className="font-bold text-2xl mb-4">Our Story</h2>
            <p className="mb-4">
                Noble In Christ Ministries is a Christian organization dedicated to spreading the gospel worldwide. Each member, known as a Noble, is discipled and trained to lead others into full Christian maturity, inspired by Matthew 28:19-20.
            </p>
            <p className="mb-4">
                Our church serves as both a spiritual home and an evangelical center where every Noble actively participates in personal growth and kingdom service. It is God’s workshop for molding, equipping, and sending people to fulfill His mission.
            </p>
            <p className="mb-4">
                Founded under the guidance of the Holy Spirit through our President and Senior Pastor, Rev. Austin Iyere Wonders, on May 6, 2006, our mission is summed up in this vision:
            </p>
            <blockquote className="italic font-semibold text-lg text-gray-700 mb-4">
                "Revealing the love of God through the preaching of the gospel, works of charity, and the demonstration of God's power."
            </blockquote>
            <p className="mb-4">
                At Noble In Christ Ministries, we are deeply rooted in the truth of Christ’s death, burial, and resurrection. Through in-depth teachings, prayer sessions, training meetings, and evangelistic missions, we grow in the knowledge of Jesus and strengthen our faith.
            </p>
            <p className="mb-4">
                As a purpose-driven church, we are committed to reaching the ends of the earth with the gospel, serving as God's extension—His outstretched arm. We believe the gifts of the Spirit are active in every believer’s life, and our services provide a dynamic encounter with the fullness of the Spirit through the Word, prayer, prophecies, healings, and spiritual rejoicing.
            </p>
        </div>
    );
}

export default OurStory;
