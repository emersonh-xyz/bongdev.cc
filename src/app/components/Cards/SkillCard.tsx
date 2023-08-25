import { Card, CardBody } from "@nextui-org/react";

export default function SkillCard({skill}: any){
    return (
        <Card shadow="sm" isPressable>
            <CardBody className="flex flex-auto px-20">
                <p>{skill}</p>
            </CardBody> 
        </Card>
    )
}