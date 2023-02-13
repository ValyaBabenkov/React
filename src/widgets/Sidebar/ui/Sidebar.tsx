import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/className'
import { Button } from 'shared/ui/Button/ui/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
	className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	return (
		<div
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button onClick={onToggle}>{'toggle'}</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
