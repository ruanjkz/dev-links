import Image from 'next/image'
import Profile from './components/Profile'
import Links from './components/Links'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'

export default async function Home() {
  const response = await fetch('https://api.github.com/users/ruanjkz')
  const user = await response.json()
  const links = [
    { url: 'https://discord.gg/cancunrp', name: '@fusiongroup' },
    { url: 'https://discord.gg/nexusrp', name: '@nexusgroup' },
    { url: 'https://discord.gg/race', name: '@raceultimate' },
    { url: 'https://discord.gg/2Reeah3p', name: '@goat' },
    { url: 'https://discord.gg/filadelfiacity', name: '@filadelfiagroup' },
    { url: 'https://discord.gg/energy-rp', name: '@energyrp' },
    { url: 'https://discord.gg/winspvp', name: '@winspvp' },
    { url: 'https://discord.gg/rj', name: '@rjacademy' },
    { url: 'https://discord.gg/cancunrp', name: '@paradiserp' },
    { url: 'https://discord.gg/metacityrp', name: '@metagroup' },
    { url: 'https://bio.site/heragroupoficial', name: '@heragroup' },
  ]

  return (
    <div className='w-screen h-screen flex flex-col gap-2 items-center bg-background bg-cover bg-no-repeat'>
      <Profile avatarUrl={user.avatar_url} userName={user.login}/>
      <div className='flex flex-col items-center gap-4 mt-[2.5rem] h-[50%] overflow-y-auto px-2'>
        {
          links.map((link, index) => <Links key={index} url={link.url} name={link.name}/>)
        }
      </div>
      <div className='flex gap-4 mt-4'>
        <Link href="https://github.com/ruanjkz"><AiFillGithub color="white" size={30}/></Link>
        <Link href="https://www.instagram.com/ruan.jkz/"><AiFillInstagram color="white" size={30}/></Link>
        <Link href="https://www.linkedin.com/in/ruan-pablo-735bba258/"><AiFillLinkedin color="white" size={30}/></Link>
      </div>
    </div>
  )
}
