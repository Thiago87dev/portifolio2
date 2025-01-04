interface SkillsProps {
    name: string,
    colorText:string,
    colorBg: string,
    icon: React.ReactNode,
    rounded?: string
}

const Skills = ({name, icon, colorText, colorBg, rounded}:SkillsProps) => {
  return (
    <div className="dark:bg-colorBgDark bg-colorBgNavLight shadow-lg  w-56 h-56 p-2 text-colorTextLight dark:text-colorTextDark rounded">
        <div className="flex flex-col items-center justify-around w-full h-full">
            <div className={`text-7xl`} style={{ color: colorText, backgroundColor: colorBg, borderRadius: rounded}}>
                {icon}
            </div>
            <div className="text-xl font-bold">
                {name}
            </div>
        </div>
    </div>
  )
}

export default Skills