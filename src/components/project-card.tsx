import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card placeholder="test" color="transparent" shadow={false}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder="test"
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0" placeholder="test">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" placeholder="test">
            {title}
          </Typography>
        </a>
        <Typography
          className="mb-6 font-normal !text-gray-500"
          placeholder="test"
        >
          {desc}
        </Typography>
        <Button color="gray" size="sm" placeholder="test">
          see details
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
