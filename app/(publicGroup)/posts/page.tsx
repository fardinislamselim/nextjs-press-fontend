import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const PortPage = () => {
    return (
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <h1>Posts</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in eius
          et veritatis? Sit odio exercitationem voluptate iusto deserunt
          sapiente labore numquam vero ex fuga! Dolore, modi magnam! Eveniet,
          consectetur.
        </p>
        <Button className="mt-4" variant="link" size={"lg"}>
          <Link href="/">Home</Link>
        </Button>
      </div>
    );
};

export default PortPage;