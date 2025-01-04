# Roadmap

## Stack

- [x] NextJS 15
- [ ] pmndrs 3D stack
- [x] Tailwind 4, shadcn/ui as UI
- [x] React 19 & Compiler
- [x] DX Tools (Prettier, ESLint, ...)
- [x] Howler as Audio Provider
- [x] Posthog, Axiom, Vercel as Analytics
- [x] Sentry, ArcJet as Application Health

- ### WebSocket & Game State

    - [x] socket.io

    - [ ] Evaluate State Managment
        - [ ] Jotai as Global State
        - [ ] Zustand as State Machine

- ### DB

    - [ ] UpStash as Redis

    - [ ] Evaluate DB Provider
        - Turso as LibSQL
        - Neon as Postgres

## Game

- ### Game Lobby

    - [x] Player Join
    - [ ] Player leave
    - [ ] Show players joined
    - [ ] Room Leader
    - [ ] Player management
    - [ ] Ready state
    - [ ] Play action

- ### Game Loop

    - [ ] IN - OUT Phase
    - [ ] Voting
    - [ ] History

- ### Game Logic

    - [ ] Decision
    - [ ] Win conditions
    - [ ] Game Management

- ### Gameplay Overhaul
    - [ ] Game Test
    - [ ] Feedback
    - [ ] Working state

## UI

- [ ] UI
    > UI list contained in internal files.

## Audio

- [ ] Audio
    > Audio list contained in internal files.

## 3D

- [ ] Lobby
- [ ] Game Scene
- [ ] Scene Ambient

## Porting

- [ ] Steam

## I18N

- ### Multilingual
    - [ ] Evaluate Interlingual Provider/Tool
        - [ ] [next-intl](https://github.com/amannn/next-intl)
        - [ ] [Crowdin](https://crowdin.com/)
- ### Multi-Regional
    - [ ] ...

## A11Y

- [ ] ...

## Deploying

- [ ] Vercel for Front-End

- [x] Evaluate WebSocket service
    - ~~Railway~~
    - [ ] Fly.io
