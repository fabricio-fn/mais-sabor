import { useEffect, useState } from "react"

interface iHeader {
	showMenu: boolean
	toggleMenu: () => void
}

export default function useHeader(): iHeader {
	const [showMenu, setShowMenu] = useState(true)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
		console.log("clicou")
	}

	useEffect(() => {
		const handleResize = () => {
			setShowMenu(window.innerWidth > 768)
		}

		const handleScroll = () => {
			if (window.innerWidth <= 768) {
				setShowMenu(false)
			}
		}

		window.addEventListener("resize", handleResize)
		window.addEventListener("scroll", handleScroll)

		handleResize()

		return () => {
			window.removeEventListener("resize", handleResize)
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return {
		showMenu,
		toggleMenu,
	}
}