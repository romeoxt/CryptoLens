import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const tutorialSteps = [
  {
    title: "Welcome to CryptoLens",
    description: "CryptoLens is your advanced blockchain forensics tool. Let's walk through its key features.",
  },
  {
    title: "Analyze Addresses",
    description: "Enter a blockchain address in the search bar to start your analysis.",
  },
  {
    title: "Explore Transactions",
    description: "View detailed transaction histories and visualize fund flows.",
  },
  {
    title: "Generate Reports",
    description: "Create comprehensive reports for your investigations with just a few clicks.",
  },
  {
    title: "Set Up Alerts",
    description: "Configure custom alerts to stay informed about specific blockchain activities.",
  },
]

export function OnboardingTutorial() {
  const [open, setOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setOpen(false)
    }
  }

  const handleSkip = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{tutorialSteps[currentStep].title}</DialogTitle>
          <DialogDescription>
            {tutorialSteps[currentStep].description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={handleSkip}>Skip Tutorial</Button>
          <Button onClick={handleNext}>
            {currentStep === tutorialSteps.length - 1 ? "Finish" : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

