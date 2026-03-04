# test backend git repo sync

import os
from dotenv import load_dotenv

load_dotenv()  # MUST be before importing supabase

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date, timedelta

from app.config import supabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# TESTING DATE: you can change this to simulate different days
TEST_DATE = date(2026, 1, 18)

class DailyExerciseRequest(BaseModel):
    user_id: str


@app.get("/")
def read_root():
    return {"Hello": "World"}



import os
from dotenv import load_dotenv

load_dotenv()  # MUST be before importing supabase

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date, timedelta

from app.config import supabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class DailyExerciseRequest(BaseModel):
    user_id: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/daily-exercise/complete")
def handle_daily_exercise(request: DailyExerciseRequest):
    user_id = request.user_id

    today_str = date.today().isoformat()
    yesterday_str = (date.today() - timedelta(days=1)).isoformat()

    profile = (
        supabase
        .from_("user_profile")
        .select("current_streak, streak_dates")
        .eq("id", user_id)
        .single()
        .execute()
    )

    current_streak = profile.data.get("current_streak") or 0
    streak_dates = profile.data.get("streak_dates") or []

    if today_str in streak_dates:
        return {
            "status": "already_completed",
            "current_streak": current_streak,
            "completed_today": True
        }

    # Determine new streak
    if yesterday_str in streak_dates:
        new_streak = current_streak + 1
    else:
        new_streak = 1

    updated_dates = streak_dates + [today_str]

    supabase.from_("user_profile").update({
        "current_streak": new_streak,
        "streak_dates": updated_dates,
    }).eq("id", user_id).execute()

    return {
        "status": "success",
        "current_streak": new_streak,
        "completed_today": True
    }
